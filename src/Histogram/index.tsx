/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState, useRef } from 'react';
import { useBbox } from '../hooks';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { buildLocation } from '../utils';
import './histogram.css';
import _ from 'underscore';

const valuetext = (value: any) => `${value}`;

/**
 *
 * @param props
 */
const RangeSlider = (props: any) => {
  const {
    intervals = [0, 10],
    histogramNotifier = (val: any) => val,
    slideValue = (val: any) => val,
  } = props;
  const [value, setValue] = useState([0, 10]);
  const min = intervals[0];
  const max = intervals[1];

  useEffect(() => {
    setValue(intervals);
  }, []);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
    slideValue(newValue);
  };

  const notifyChange = (event: any, newValue: any) => {
    histogramNotifier(newValue);
  };

  return (
    <Box sx={{ width: '100%', valueLabel: 'blue' }}>
      <Slider
        getAriaLabel={() => ''}
        value={value}
        onChangeCommitted={notifyChange}
        onChange={handleChange}
        getAriaValueText={valuetext}
        max={max}
        min={min}
        step={1}
        valueLabelDisplay="on"
      />
    </Box>
  );
};

/**
 * Notice: 
 * - sliderValueChanged: all external components wanting to be notified after a interval value changes need to be passed in
  this list
 * @param {*} props 
 * @returns 
 */
export const Histogram = (props: any) => {
  const {
    absolute,
    location = '',
    intervals = [0, 0],
    data = [],
    height = 80,
    top = 0,
    bottom = 0,
    left = 0,
    right = 0,
    sliderValueChanged = [],
    scaleOp,
  } = props;

  const [bbox, histogramSliderRef] = useBbox();
  const totalBins =
    data.length % 40 === 0
      ? 40
      : Math.floor(data.length / (Math.floor(data.length / 40) + 1));
  const [customClass, setCustomClass] = useState('');
  const [showBar, setShowBar] = useState(false);
  const spaceBetween = 2;
  const histogramHeight = Math.max(height, 40);
  let histogram = new Array(totalBins + 1).fill(0);
  const [bars, setBars] = useState([]);
  const [filledBars, setFilledBars] = useState([0, histogram.length]);
  const dataLength = useRef(data.length);
  const scale_op = useRef(scaleOp);

  useEffect(() => {
    if (data.length !== dataLength.current) {
      dataLength.current = data.length;
      createHistogram().then((result: any) => {
        if (result.length > 0) {
          const max = Math.max(...result);
          result = result.map((value: number) => value / (max !== 0 ? max : 1));
          setBars(result);
          setShowBar(true);
        }
      });
    }
  });

  /**
   *
   * @returns computer histogram bar width
   */
  function computeBarNumber() {
    return totalBins + 1;
  }

  useEffect(() => {
    let customclass = '';
    customclass += `${absolute ? 'absolute' : ''} `;
    customclass += `${location} `;
    setCustomClass(customclass);
  }, []);

  const createHistogram = async () => {
    if (intervals && intervals.length === 2) {
      const binSize = (intervals[1] - intervals[0]) / computeBarNumber();

      if (data.length > 0) {
        data.map((item: any) => {
          let dateCounter = 0;
          if (item.year >= intervals[0] && item.year <= intervals[1])
            dateCounter = item.year - intervals[0];
          if (item.year < intervals[0]) dateCounter = 0;
          if (item.year > intervals[1]) dateCounter = histogram.length - 1;

          const position =
            Math.floor(dateCounter / binSize) === histogram.length
              ? Math.floor(dateCounter / binSize) - 1
              : Math.floor(dateCounter / binSize);
          histogram[position] +=
            scale_op.current === "Nombre d'observations"
              ? item.count_obs
              : item.count_species;
          return item;
        });

        const maximum = Math.max(...histogram);
        histogram = histogram.map(
          (element) => element / (maximum !== 0 ? maximum : 1)
        );
      } else {
        histogram.fill(0);
      }

      return histogram;
    }
    return [];
  };

  useEffect(() => {
    createHistogram().then((result: any) => {
      if (result.length > 0) {
        const max = Math.max(...result);
        result = result.map((value: any) => value / (max !== 0 ? max : 1));

        setBars(result);
        setShowBar(true);
      }
    });
    scale_op.current = scaleOp;
  }, [data, scaleOp]);

  /**
   * Function used only to change the value of the intervals and draw the bars correctly (opacity)
   * @param {*} newValue
   */
  const onSliderValueChange = (newValue: any) => {
    const binSize =
      (intervals[1] - intervals[0]) / Math.floor(computeBarNumber());

    const from = Math.floor((newValue[0] - intervals[0]) / binSize);
    const to = Math.floor((newValue[1] - intervals[0]) / binSize);
    setFilledBars([from, to]);
  };

  /**
   * Function used to notify external components of new interval values. It has been separeted from onSliderValueChange
   * to send a notification only when the mouseup event of the slider has been trigger. This wait on avoid multiple calls
   * in case that callbacks are time consuming functions
   * @param {*} newValue
   */
  const onSliderNotifyChange = (newValue: any) => {
    sliderValueChanged.map((fn: any) => {
      fn([newValue[0], newValue[1]]);
      return fn;
    });
  };

  const style = buildLocation(location, top, right, left, bottom);
  const subtitleInterval = Math.floor((intervals[1] - intervals[0]) / 4);

  const barWidth =
    bbox.width > 0
      ? bbox.width - 4
      : (100 - spaceBetween * totalBins) / totalBins;

  const histgrameBarContainerStyle = {
    background: 'transparent',
    height: `${histogramHeight}px`,
    marginBottom: '-12px',
  };

  return showBar ? (
    <div
      className={`${customClass}`}
      style={{ ...style, width: 'max(30%,200px)', maxWidth: '290px' }}
    >
      <div className="histogram">
        <div style={histgrameBarContainerStyle}>
          <div
            id="histogramUl"
            ref={histogramSliderRef}
            className="histogram-ul"
          >
            {bars.map((bar, index) => (
              <div
                key={_.uniqueId(
                  JSON.stringify({ n: Math.random(), m: Date.now() })
                )}
                style={{
                  height: `${bar * 100}%`,
                  width: `${barWidth}px`,
                  background: '#1976d2',
                  borderRadius: '5px',
                  opacity:
                    index >= filledBars[0] && index <= filledBars[1]
                      ? '1'
                      : '0.3',
                }}
              />
            ))}
          </div>
        </div>
        <div className="histogram-slider">
          <RangeSlider
            intervals={intervals}
            slideValue={onSliderValueChange}
            histogramNotifier={onSliderNotifyChange}
          />
        </div>
        <div className="histogram-subtitle">
          <div className="histogram-subtitle-item" />
          <div className="histogram-subtitle-item">
            {intervals[0] + 1 * subtitleInterval}
          </div>
          <div className="histogram-subtitle-item">
            {intervals[0] + 2 * subtitleInterval}
          </div>
          <div className="histogram-subtitle-item">
            {intervals[0] + 3 * subtitleInterval}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
};
