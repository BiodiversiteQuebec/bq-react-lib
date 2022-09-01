import styled from 'styled-components';
import { CustomFontAwesomeIcon } from '../Common/Icons';
import { Text } from '../Text/textstyles';

export const CarouselArrow = styled(CustomFontAwesomeIcon)`
  font-size: 30px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  padding: 0.2em;

  &:hover {
    font-size: 40px;
  }
`;

export const Card = styled.div`
  display: grid;
  grid-template-rows: min-content;

  background: rgba(255, 255, 255, 1);

  border: '1px solid red';
  width: 100%;
  height: 100%;
  color: black;
  border-radius: 8px;
  gap: 5px;
  & > img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: 8px 8px 0px 0px;
  }

  & .card-title {
    padding: 2rem;

    @media ${({ theme }) => theme.devices.laptopL} {
      padding: 1rem;
    }

    @media ${({ theme }) => theme.devices.mobileL} {
      padding: 0.6rem;
    }
  }
`;

export const CardTitleText = styled(Text)`
  color: ${({ theme }) => theme.colors.darkv2};
  font-weight: 800;
  font-size: 20px;

  @media ${({ theme }) => theme.devices.laptopL} {
    font-size: 16px;
  }
`;

//version flexBox
export const FbContainer = styled.div`
  --slider-padding: 5rem;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 0;
  overflow: hidden;
  min-height: 300px;
`;

export const FbSlider = styled.div`
  --slider-index: 0;
  --items-per-screen: 3;
  display: flex;
  width: calc(100% - 2 * var(--slider-padding));
  transform: translateX(calc(var(--slider-index) * -100%));
  transition: transform 250ms ease-in-out;
  & .slider-card {
    flex: 0 0 calc(100% / var(--items-per-screen));
    max-width: calc(100% / var(--items-per-screen));
    padding: 0.25rem;
  }

  @media ${({ theme }) => theme.devices.desktop} {
    --items-per-screen: 5;
  }

  @media ${({ theme }) => theme.devices.laptopL} {
    --items-per-screen: 3;
  }

  @media ${({ theme }) => theme.devices.mobileL} {
    --items-per-screen: 1;
  }
`;

export const Handler = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--slider-padding);
  z-index: 10;
  margin: 0.25rem 0;
  border: none;
`;

export const CardWrapper = styled.div`
  height: 100%;
  border: 10px solid transparent;
  padding: 15px;
`;
