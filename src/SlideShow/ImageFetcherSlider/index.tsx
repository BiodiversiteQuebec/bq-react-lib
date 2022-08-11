import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { ImageSlideCard } from '../ImageSlideCard';
import {
  ImageSlideCardControlLeft,
  ImageSlideCardControlRight,
  ImageSliderContainer,
} from '../slideshowstyles';

/**
 * Next and Before control
 * @param {*} param0
 * @returns
 */
const Control = (props: any) => {
  const { hide, onClick, icon, sence = '' } = props;

  return sence === 'before-arrow' ? (
    <ImageSlideCardControlLeft hide={hide} onClick={() => onClick()}>
      {icon}
    </ImageSlideCardControlLeft>
  ) : (
    <ImageSlideCardControlRight hide={hide} onClick={() => onClick()}>
      {icon}
    </ImageSlideCardControlRight>
  );
};
/**
 *
 * @param {*} param0
 * @returns
 */
export const ImageFetcherSlider = (props: any) => {
  const { image, onNext, onBack, length = 1, card, onSearch } = props;

  return (
    <ImageSliderContainer>
      <div style={{ padding: '5px 25px', height: '100%' }}>
        <ImageSlideCard image={image} card={card} onSearch={onSearch} />
      </div>
      <Control
        sence="next-arrow"
        hide={length === 1}
        onClick={() => onNext()}
        icon={<NavigateNextIcon />}
      />

      <Control
        sence="before-arrow"
        hide={length === 1}
        onClick={() => onBack()}
        icon={<NavigateBeforeIcon />}
      />
    </ImageSliderContainer>
  );
};
