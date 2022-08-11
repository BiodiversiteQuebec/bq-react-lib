import styled from 'styled-components';
import Card from '@mui/material/Card';
import { colors } from '../styles';

interface ImageBoxProps {
  width: number;
  height: number;
}

// Common
export const ImageSlideCardText = styled.div`
  font-size: 8pt;
  color: ${colors.darkgreen};
`;

// ImageBox styles
export const ImageBoxContainer = styled.div`
  width: 100%;
`;

export const NoImageBoxContainer = styled(ImageBoxContainer)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  min-height: 100px;
  text-align: center;
  align-items: center;
  font-family: Brother-1816-Bold;
  padding: 0.6em;
  text-transform: uppercase;
  font-weight: 800;
  width: ${(props: ImageBoxProps) => props.width};
  height: ${(props: ImageBoxProps) => props.height};
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
`;

// ImageSlideCard styles
export const ImageSlideCardContainer = styled(Card)`
  width: 180px;
`;

export const ImageSlideCardContainerRelative = styled.div`
  position: relative;
`;

export const ImageSlideCardModalContainer = styled.div`
  position: absolute;
  bottom: '5px';
  right: '5px';
  width: '100%';
  height: '100%';
`;

export const ImageSlideCardDetailTop = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 2px 0.5em;
  margin-bottom: 5px;
`;

export const ImageSlideCardDetailTopBottom = styled(ImageSlideCardDetailTop)`
  align-items: center;
  margin-bottom: 0px;
`;

export const ImageSlideCardTopData = styled(ImageSlideCardText)`
  font-weight: bold;
  font-size: 10pt;
`;

export const ImageSlideCardDetailContainer = styled(ImageSlideCardText)`
  font-size: 8pt;
  border-left: 2px solid rgba(46, 72, 62, 0.4);
  padding-left: 3px;
  flex: 1;
`;

export const ImageSlideCardDetailTopBold = styled(ImageSlideCardDetailTop)`
  font-weight: bold;
`;

// ImageFetcherSlider

interface ImageSliderControlProp {
  hide?: boolean;
  sence?: string;
}

export const ImageSliderContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const ImageSlideCardControlLeft = styled.div`
  position: absolute;
  border-radius: 50%;
  top: 45%;
  left: -5px;
  color: black;
  display: ${(props: ImageSliderControlProp) => (props.hide ? 'none' : 'flex')};
`;

export const ImageSlideCardControlRight = styled.div`
  position: absolute;
  border-radius: 50%;
  top: 45%;
  right: -5px;
  color: black;
  display: ${(props: ImageSliderControlProp) => (props.hide ? 'none' : 'flex')};
`;
