import styled from "styled-components";

export const DotsCard = styled.div`
  display: grid;
  grid-template-rows: min-content;
  background: rgba(255, 255, 255, 1);
  border: "1px solid red";
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
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
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

//version flexBox
export const FbContainerDots = styled.div`
  --slider-padding: 0rem;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 0;
  overflow: hidden;
  min-height: 400px;
  position: relative;

  & .dot {
    width: 10px;
    height: 10px;
    background-color: #c6c2c2;
    border-radius: 50%;
  }

  & .active {
    background-color: blue;
  }
`;

export const FbSlider = styled.div`
  --slider-index: 0;
  --items-per-screen: 3;
  --slide-position: 0;
  --slide-transform-size: calc(var(--slider-index) * -100%);
  display: flex;
  height: 50%;
  width: 100%; //calc(100% - 2 * var(--slider-padding));
  transform: translateX(var(--slide-transform-size));
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

export const CardWrapper = styled.div`
  height: 100%;
  border: 10px solid transparent;
  padding: 15px;
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  gap: 5px;
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  background-color: blue;
  border-radius: 50%;
`;

export const Logo = styled.div`
  width: 100%;
  height: 60px;

  & > img {
    width: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
  }
  & > img:hover {
    filter: grayscale(0%);
    -webkit-filter: grayscale(0%);
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
  }
`;

export const CarouselTitle = styled.div`
  padding-bottom: 10px;
  display: flex;
  justify-content: center;

  & > h2 {
    padding-bottom: 10px;
    border-bottom: 5px solid #467fbf;
    text-transform: capitalize;
  }
`;
