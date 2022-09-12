import React, { useState } from 'react';
import analyze from 'rgbaster';
import {
  ImageSlideCardContainer,
  ImageSlideCardContainerRelative,
  ImageSlideCardDetailTop,
  ImageSlideCardTopData,
  ImageSlideCardText,
  ImageSlideCardDetailTopBottom,
} from '../slideshowstyles';

import '../ImageSlideCard';
import { SearchBtn } from '../../SearchBtn';
import { SlideImageView } from '../SlideImageView';
import { ImageSlideCardDetail } from '../ImageSlideCardDetail';

/**
 *
 */
interface Card {
  /**
   *
   */
  title?: string;
  /**
   *
   */
  subtitle?: string;
  /**
   *
   */
  leftText?: string;
  /**
   *
   */
  rightText?: string;
}

interface Image {
  /**
   *
   */
  url: string;
  /**
   *
   */
  thumburl: string;
  /**
   *
   */
  width: number;
  /**
   *
   */
  height: number;
  /**
   *
   */
  name: string;
}

/**
 *
 */
interface Props {
  /**
   *
   */
  card?: Card;

  /**
   *
   */
  image: Image;

  /**
   *
   */
  searchBtn?: any;

  /**
   *
   */
  activeModal: boolean;
}

/**
 *
 * @param props
 */
export const ImageSlideCardView = (props: Props) => {
  const { card, image, searchBtn, activeModal } = props;

  const [open, setOpen] = useState(false);

  /**
   *@returns void
   */
  const handleOpen = () => setOpen(true);

  /**
   *@returns void
   */
  const handleClose = () => setOpen(false);

  let aspectRatio = 0;

  const styleModel: any = { width: 0, height: 0 };
  if (image) {
    aspectRatio = image.width / image.height;

    if (aspectRatio <= 1) {
      styleModel.width = `auto`;
      styleModel.height = '80%';
    } else {
      styleModel.width = '80%';
      styleModel.height = `auto`;
    }
  }

  return (
    <ImageSlideCardContainer>
      <ImageSlideCardContainerRelative>
        <ImageSlideCardContainerRelative>
          <SlideImageView
            url={image ? image.thumburl : undefined}
            alt={image ? image.name : ''}
            onClick={handleOpen}
            onModalClose={handleClose}
            onModalOpen={handleClose}
            open={open && activeModal}
            styleModel={styleModel}
          />
        </ImageSlideCardContainerRelative>

        <ImageSlideCardDetailTop>
          <div className="card-info" style={{ flex: 1 }}>
            <ImageSlideCardTopData>{card?.title}</ImageSlideCardTopData>
            <ImageSlideCardText>{card?.subtitle}</ImageSlideCardText>
          </div>
          {searchBtn}
        </ImageSlideCardDetailTop>
        <ImageSlideCardDetailTopBottom>
          <ImageSlideCardDetail
            subtitle="fr."
            title={`${card?.leftText || 'none'}`}
          />
          <ImageSlideCardDetail
            subtitle="en."
            title={`${card?.rightText || 'none'}`}
          />
        </ImageSlideCardDetailTopBottom>
      </ImageSlideCardContainerRelative>
    </ImageSlideCardContainer>
  );
};
