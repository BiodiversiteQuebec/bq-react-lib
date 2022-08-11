import React, { useRef, useEffect, useState } from 'react';
import { ImageFetcherSlider } from '../ImageFetcherSlider';

const initialState = {
  card: {
    id_taxa_obs: -1,
    obs: 0,
    scientificName: 'None',
    vernacular_en: 'None',
    vernacular_fr: 'None',
  },
  image: undefined,
};

/**
 *
 * @param props
 */
export const ImageFetcher = (props: any) => {
  const {
    scientificNames = [],
    height,
    searchFn = (value: any) => value,
  } = props;
  const { imageProvider = (params: any) => params } = props;
  const [state, setState] = useState(initialState);
  const index = useRef(0);

  /**
   *
   * @param scientificNames
   */
  const fetchImage = async (specie: any) => {
    const defaultCard = {
      card: {
        obs: 0,
        observed_scientific_name: 'none',
        valid_scientific_name: 'none',
        vernacular_en: 'none',
        vernacular_fr: 'none',
      },
      image: undefined,
    };

    if (specie) {
      const res = await imageProvider(specie);

      return res.image['0']
        ? { ...res, image: res.image['0'] }
        : { ...res, image: undefined };
    }

    return defaultCard;
  };

  /**
   *
   */
  const nextImage = async () => {
    index.current =
      index.current === scientificNames.length - 1 ? 0 : index.current + 1;

    const newimg = await fetchImage(scientificNames[index.current]);
    setState(old => ({ ...old, ...newimg }));
  };

  /**
   *
   */
  const previousImage = async () => {
    index.current =
      index.current === 0 ? scientificNames.length - 1 : index.current - 1;

    const newimg = await fetchImage(scientificNames[index.current]);
    setState(old => ({ ...old, ...newimg }));
  };

  /**
   *
   */
  const onSearch = () => {
    if (scientificNames.length > 0) {
      searchFn(scientificNames[index.current]);
      index.current = 0;
    }
  };

  useEffect(() => {
    if (scientificNames.length > 0 && index.current < scientificNames.length) {
      fetchImage(scientificNames[index.current]).then((image: any) => {
        setState(old => ({ ...old, ...image }));
      });
    }

    return () => {
      index.current = 0;
    };
  }, [scientificNames]);

  return (
    <ImageFetcherSlider
      height={height}
      image={state.image}
      onNext={nextImage}
      onBack={previousImage}
      length={scientificNames.length}
      card={state.card}
      onSearch={() => onSearch()}
    />
  );
};
