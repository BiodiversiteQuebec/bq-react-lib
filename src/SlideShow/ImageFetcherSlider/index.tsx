import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { ImageSlideCard } from '../ImageSlideCard';
import { ImageSlideCardView } from '../ImageSlideCardView';
import {
  ImageSlideCardControlLeft,
  ImageSlideCardControlRight,
  ImageSliderContainer,
} from '../slideshowstyles';
import '../ImageSlideCard/ImageSlideCard.css';

/**
 * Next and Before control
 * @param {*} param0
 * @returns
 */
export const Control = (props: any) => {
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
  const { image, onNext, onBack, hide, card, searchBtn, activeModal } = props;

  return (
    <ImageSliderContainer style={{ background: 'green' }}>
      <div style={{ padding: '5px 25px', height: '100%' }}>
        <ImageSlideCardView
          image={image}
          card={card}
          searchBtn={searchBtn}
          activeModal={activeModal}
        />
      </div>
      <Control
        sence="next-arrow"
        hide={hide}
        onClick={() => onNext()}
        icon={<NavigateNextIcon />}
      />

      <Control
        sence="before-arrow"
        hide={hide}
        onClick={() => onBack()}
        icon={<NavigateBeforeIcon />}
      />
    </ImageSliderContainer>
  );
};
