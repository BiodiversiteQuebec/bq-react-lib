import React from 'react';

import {
  CarouselArrow,
  FbContainer,
  FbSlider,
  Handler,
  Card,
  CardWrapper,
  CardTitleText,
} from './styles';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import _ from 'underscore';
import { MenuItemData } from 'src/types';

interface GalleryProps {
  onClick: any;
  cards?: any;
}
export const Carousel = (props: GalleryProps) => {
  const onClick = props.onClick;
  const cards = props.cards || [];

  const getSlider = (e: any) => {
    const handle = e.target;
    return (handle as HTMLElement)
      .closest('.slider-container')
      ?.querySelector('.slider');
  };
  const computeNUmberOfSlides = (e: any) => {
    const slider: any = getSlider(e);

    if (slider) {
      const itemCount = slider.children.length;
      const itemsPerScreen = parseInt(
        getComputedStyle(slider).getPropertyValue('--items-per-screen')
      );
      return Math.ceil(itemCount / itemsPerScreen);
    }
    return -1;
  };

  const next = (e: any) => {
    const slider: any = getSlider(e);
    const totalSlides = computeNUmberOfSlides(e);

    if (slider && totalSlides !== -1) {
      const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue('--slider-index')
      );
      if (sliderIndex < totalSlides - 1)
        slider.style.setProperty('--slider-index', sliderIndex + 1);
    }
  };
  const previous = (e: any) => {
    const slider: any = getSlider(e);

    if (slider) {
      const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue('--slider-index')
      );

      if (sliderIndex > 0)
        slider.style.setProperty('--slider-index', sliderIndex - 1);
    }
  };

  return (
    <FbContainer className="slider-container">
      <Handler>
        <CarouselArrow
          onClick={previous}
          icon={faChevronLeft}
          className="fa-regular fa-2x"
          style={{ color: '#fff' }}
        />
      </Handler>
      <FbSlider className="slider">
        {cards.map((item: MenuItemData, index: any) => (
          <CardWrapper className="slider-card" key={JSON.stringify(item)}>
            <Card
              className="shadow"
              onClick={() => {
                if (onClick) onClick();
              }}
            >
              <img src={item.img} alt={'img'} />
              <div className="card-title">
                <CardTitleText>Hehje {index + 1}</CardTitleText>
              </div>
            </Card>
          </CardWrapper>
        ))}
      </FbSlider>
      <Handler>
        <CarouselArrow
          onClick={next}
          icon={faChevronRight}
          className="fa-regular fa-2x"
        />
      </Handler>
    </FbContainer>
  );
};
