import React, { useState, useEffect } from 'react';
import _ from 'underscore';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { CSelect } from '../selectorstyles';

interface SelectorProps {
  onValueChange: (value: any | undefined) => void;
  selectorId?: string;
  selectorList?: Array<any>;
  value: string;
  t: (text: string) => string;
  onFocusout?: boolean;
}

/**
 *
 * @param props
 */
export const Selector = (props: SelectorProps) => {
  const {
    onValueChange = (value: any | undefined) => 0,
    selectorId,
    selectorList = [],
    t = (text: string) => text,
    value,
    onFocusout = false,
  } = props;
  const [lossFocus, setLossFocus] = useState(onFocusout);

  /**
   *
   * @param event
   */
  const onChange = (event: any) => {
    selectorList.filter(
      (item: any, index: number) => item.option === event.target.value
    );
    onValueChange({ selectorId, value: event.target.value });
  };

  const onClose = (event: any) => {
    if (event.target.dataset.value === value && lossFocus) {
      setLossFocus(false);
      onValueChange({ selectorId, value: event.target.dataset.value });
    }
  };

  useEffect(() => {
    setLossFocus(onFocusout);
  }, [onFocusout]);

  return (
    <div className="selector38px" id={selectorId} style={{ width: '100%' }}>
      <FormControl sx={{ width: '100%' }}>
        <CSelect
          displayEmpty
          value={value}
          onChange={onChange}
          onClose={onClose}
        >
          {selectorList.map((element: any) => (
            <MenuItem
              key={_.uniqueId(JSON.stringify(element.key))}
              value={element.value}
            >
              {t(element.option)}
            </MenuItem>
          ))}
        </CSelect>
      </FormControl>
    </div>
  );
};
