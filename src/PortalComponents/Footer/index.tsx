import React from 'react';
import { PaddingContainerwithBg } from '../Common/Layouts';
import { InfoContent } from './FooterInfoContent';
import { FooterLeftContent } from './FooterLeftContent';
import { FooterLinksContent } from './FooterLinksContent';
import {
  FooterContainer,
  FooterGrid,
  GridItemFooterLeft,
  GridItemFooterRight,
} from './styles';

interface FooterProps {
  theme?: any;
}

export const Footer = (props: FooterProps) => {
  const { theme } = props;
  return (
    <PaddingContainerwithBg>
      <FooterContainer theme={theme}>
        <FooterGrid>
          <GridItemFooterLeft>
            <FooterLeftContent theme={theme} />
          </GridItemFooterLeft>
          <GridItemFooterRight>
            <FooterLinksContent theme={theme} />
          </GridItemFooterRight>
          <GridItemFooterRight>
            <InfoContent theme={theme} />
          </GridItemFooterRight>
        </FooterGrid>
      </FooterContainer>
    </PaddingContainerwithBg>
  );
};
