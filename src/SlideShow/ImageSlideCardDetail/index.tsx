import React from "react";
import {
  ImageSlideCardDetailContainer,
  ImageSlideCardDetailTopBold,
} from "../slideshowstyles";
/**
 *
 * @param root0
 * @param root0.subtitle
 * @param root0.title
 */
export const ImageSlideCardDetail = ({ subtitle = "fr.", title = "" }) => (
  <ImageSlideCardDetailContainer>
    <ImageSlideCardDetailTopBold>{title}</ImageSlideCardDetailTopBold>
    <div>{subtitle}</div>
  </ImageSlideCardDetailContainer>
);
