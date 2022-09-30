import styled from 'styled-components';
import React from 'react';
import { Text } from '../../Text/textstyles';
import _ from 'underscore';

export const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const ContentHeroLayout = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 355px;
  padding: 30px 0;

  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: fit-content;
    gap: 15px;
  }

  @media ${({ theme }) => theme.devices.gttv} {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 19px 0px;
  gap: 34px;
  width: 415px;
  color: ${({ theme }) => theme.components.text.basic.menu.color};
  @media ${({ theme }) => theme.devices.tablet} {
    width: 100%;
  }
`;

export const DescriptionHeroText = styled(Text)`
  font-weight: 600;
  line-height: 1.2rem;
  font-size: 1.2rem;
  letter-spacing: 0.35px;

  & span {
    line-height: 1.2rem;
    font-size: 1.2rem;
    letter-spacing: 0.35px;
  }

  @media ${({ theme }) => theme.devices.gttv} {
    line-height: ${({ theme }) => `${theme.lineHeight.large}rem`};
    font-size: ${({ theme }) => `${theme.fontSize.large}rem`};
  }
`;

interface Props {
  backgroundUri?: string;
  children?: any;
  style?: any;
}

export const Grid = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
  align-items: center;
  grid-auto-rows: auto;
  padding: 0px 0px;

  @media (min-width: 913px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.devices.tabletM} {
    border-radius: 8px;
    width: 96%;
  }
`;

export const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridItem1 = styled(GridItem)`
  width: 100%;
  height: fit-content;
  margin-bottom: 30px;
  justify-content: flex-start;
  padding-left: ${({ theme }) => `${theme.paddings.body.left}px`};

  @media ${({ theme }) => theme.devices.tabletM} {
    justify-content: center;
    padding: 0px 20px;
  }
`;

// for video player
export const GridItem3 = styled(GridItem)`
  justify-content: flex-end;
  padding-right: ${({ theme }) => `${theme.paddings.body.right}px`};
  @media (min-width: 913px) {
    grid-column: 2;
    grid-row: 1 / span 3;
    justify-content: center;
  }

  @media ${({ theme }) => theme.devices.tabletM} {
    padding: 0 20px;
    justify-content: center;
  }
`;

export const ItemWrapper = styled.div`
  max-width: 500px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media (min-width: 912px) {
    width: 500px;
    max-width: 2000px;
    justify-content: center;
    align-items: center;
  }

  @media ${({ theme }) => theme.devices.gttv} {
    width: 800px;
  }
`;

export const ItemWrapperV1 = styled(ItemWrapper)`
  @media ${({ theme }) => theme.devices.tabletM} {
    width: 100%;
    max-width: 2000px;
    justify-content: center;
    align-items: center;
  }
`;

export const StaticPageBody = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.components.body.background};
  color: ${({ theme }) => theme.components.text.basic.menu.color};
  padding: 2rem;
`;

export const WhiteStaticPageBody = styled(StaticPageBody)`
  --text-color: rgba(0, 0, 0, 0.5);
  --columns: 4;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkv2};
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: center;

  grid-gap: 3rem;
  padding: 8rem 1rem;
  max-width: 1160px;

  & > .page-description {
    width: 70%;

    span {
      color: ${({ theme }) => theme.colors.darkv2};
    }
  }

  & .grid-title {
    font-size: 20px;
    font-weight: 400;
    line-height: 23.44px;
    text-align: justify;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 400;
    padding-bottom: 0.5rem;

    @media ${({ theme }) => theme.devices.gttv} {
      line-height: ${({ theme }) => `${theme.lineHeight.large}rem`};
      font-size: ${({ theme }) => `${theme.fontSize.large}rem`};
    }
  }

  & .divider {
    width: 100%;
    border-bottom: 1px solid var(--text-color);
  }

  & .card-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    gap: 3rem;
    padding-top: 25px;
    /*  justify-items: center;
    align-items: center; */
  }

  & .card {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 5px;
    padding: 1.5rem;
    gap: 1rem;
    max-width: 380px;
  }
  @media ${({ theme }) => theme.devices.DesktopM} {
    --columns: 3;

    & > .page-description {
      max-width: 90%;
    }
  }

  @media ${({ theme }) => theme.devices.laptopL} {
    --columns: 2;
    padding: 6rem;
    & > .page-description {
      max-width: 100%;
    }
  }

  @media ${({ theme }) => theme.devices.tablet} {
    --columns: 1;
    padding: 6rem 2rem;

    & > .page-description {
      max-width: 100%;
    }
  }

  @media ${({ theme }) => theme.devices.gttv} {
    max-width: 1850px;
  }
`;

export const ContentHero = (props: Props) => {
  const { children } = props;
  return <ContentHeroLayout>{children}</ContentHeroLayout>;
};

export const PaddingContainer = styled.div`
  position: relative;
  background: transparent;
  display: flex;
  justify-content: center;
`;

export const PaddingContainerwithBg = styled.div`
  position: relative;
  background: ${({ theme }) => theme.components.header.background};
  box-shadow: 0px 2px 2px 2px rgba(9, 9, 9, 0.23);
  z-index: 5;
  display: flex;
  justify-content: center;
`;

export const HomeBodyPaddingContainer = styled.div`
  background: ${({ theme }) => theme.components.body.background};
  padding: 0 10%;
  position: relative;
  background: transparent;

  @media ${({ theme }) => theme.devices.gtlaptopL} {
    padding: 0 5%;
  }

  @media ${({ theme }) => theme.devices.laptopL} {
    padding: 0;
  }
`;
