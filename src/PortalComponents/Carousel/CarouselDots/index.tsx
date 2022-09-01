import React, {
  useLayoutEffect,
  useCallback,
  useRef,
  useEffect,
  useState,
} from 'react';

import {
  FbSlider,
  CardWrapper,
  DotsContainer,
  Dot,
  FbContainerDots,
  Logo,
  CarouselTitle,
} from './styles';

import _ from 'underscore';
import useComponentSize from 'src/hooks/useComponentDimensions';

interface GalleryProps {
  onClick: any;
  cards?: any;
  title?: string;
}
export const CarouselDots = (props: GalleryProps) => {
  const onClick = props.onClick;
  const cards = props.cards || [];
  const { title = null } = props;
  const targetRef = useRef(null);
  const { width } = useComponentSize(targetRef);
  const [activeSlide, setActiveSlide] = useState(0);
  const [carouselProps, setCarouselProps] = useState({
    totalSlides: -1,
    itemsPerScreen: -1,
  });

  const getSlider = (e: any) => {
    const handle = e.target;
    return (handle as HTMLElement)
      .closest('.slider-container')
      ?.querySelector('.slider');
  };

  const next = (e: any, index: number) => {
    const slider: any = getSlider(e);

    const { totalSlides, itemsPerScreen } = carouselProps;
    if (slider && totalSlides !== -1) {
      const itemSize = width / itemsPerScreen;
      const lastSlideItemsCount = cards.length % itemsPerScreen;

      const translationDelta =
        index === totalSlides - 1
          ? -1 * lastSlideItemsCount * itemSize
          : index * -1 * width;
      slider.style.transform = `translateX(${translationDelta}px)`;
      setActiveSlide((old) => index);
    }
  };

  const previous = (e: any, index: number) => {
    const slider: any = getSlider(e);
    if (slider) {
      slider.style.transform = `translateX(${index * -1 * width}px)`;
      //slider.style.setProperty("--slide-transform-size", index * -1 * width);
      setActiveSlide((old) => index);
    }
  };

  useEffect(() => {
    const slider = document.querySelector('.slider');
    if (slider) {
      const itemsPerScreen = parseInt(
        getComputedStyle(slider).getPropertyValue('--items-per-screen')
      );

      setCarouselProps((old) => ({
        itemsPerScreen,

        totalSlides: Math.floor(cards.length / itemsPerScreen) + 1,
      }));
    }
  }, [cards, width]);

  return (
    <div>
      <FbContainerDots className="slider-container">
        <div ref={targetRef}>
          {title && (
            <CarouselTitle>
              <h2>{title.toUpperCase()}</h2>
            </CarouselTitle>
          )}
          <FbSlider className="slider">
            {cards.map((item: any, index: any) => (
              <CardWrapper className="slider-card" key={JSON.stringify(item)}>
                <Logo>
                  <img src={item.url} alt={'img'} />
                </Logo>
              </CardWrapper>
            ))}
          </FbSlider>
          {carouselProps.itemsPerScreen !== -1 && (
            <DotsContainer>
              {Array.from(Array(carouselProps.totalSlides).keys()).map(
                (item, index) => (
                  <div
                    className={`dot ${activeSlide === index ? 'active' : ''}`}
                    key={JSON.stringify(item)}
                    onClick={
                      index % 2 === 0
                        ? (e) => previous(e, index)
                        : (e) => next(e, index)
                    }
                  />
                )
              )}
            </DotsContainer>
          )}
        </div>
      </FbContainerDots>
    </div>
  );
};
