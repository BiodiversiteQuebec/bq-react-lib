import React, { useRef, useEffect, useState } from 'react';
import { SearchBtn } from '../SearchBtn';
import { ImageFetcherSlider } from '../SlideShow/ImageFetcherSlider';

const initialState = {
  card: {
    title: 'none',
    subtitle: `0 obs`,
    leftText: 'none',
    rightText: 'none',
  },
  image: undefined,
};

/**
 *
 * @param props
 */
export const ImageFetcher = (props: any) => {
  const {
    items = [],
    height,
    searchFn = (value: any) => value,
    searchBtn,
  } = props;
  const { dataProvider = (params: any) => params } = props;
  const [state, setState] = useState(initialState);
  const index = useRef(0);

  /**
   *
   */
  const nextImage = async () => {
    index.current = index.current === items.length - 1 ? 0 : index.current + 1;
    const newdata = await dataProvider(items[index.current]);
    setState((old) => ({ ...old, ...newdata }));
  };

  /**
   *
   */
  const previousImage = async () => {
    index.current = index.current === 0 ? items.length - 1 : index.current - 1;
    const newdata = await dataProvider(items[index.current]);
    setState((old) => ({ ...old, ...newdata }));
  };

  /**
   *
   */
  const onSearch = () => {
    if (items.length > 0) {
      searchFn(items[index.current]);
      index.current = 0;
    }
  };

  useEffect(() => {
    if (items.length > 0 && index.current < items.length) {
      dataProvider(items[index.current]).then((image: any) => {
        setState((old) => ({ ...old, ...image }));
      });
    }

    return () => {
      index.current = 0;
    };
  }, [items]);

  return (
    <ImageFetcherSlider
      height={height}
      image={state.image}
      onNext={nextImage}
      onBack={previousImage}
      hideArrows={items.length === 1}
      card={state.card}
      searchBtn={
        <SearchBtn
          tooltip={'Afficher sur la carte'}
          onClick={() => onSearch()} //onSearch(card.scientificName)
        />
      }
    />
  );
};
