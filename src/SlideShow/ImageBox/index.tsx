import React from 'react';
import {
  ImageBoxContainer,
  Img,
  NoImageBoxContainer,
} from '../slideshowstyles';

export const ImageBox = (props: any) => {
  const { image, width, height } = props;
  return (
    <ImageBoxContainer>
      <Img src={image.thumburl} alt="speciesimage" style={{ width, height }} />
    </ImageBoxContainer>
  );
};

export const NoImageBox = (props: any) => {
  const { width, height } = props;
  const text = "Pas d'Image";
  return <NoImageBoxContainer {...props}> {text}</NoImageBoxContainer>;
};
