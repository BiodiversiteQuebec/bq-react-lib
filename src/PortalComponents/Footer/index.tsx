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
  t?: (key: string) => string;
}

export const Footer = (props: FooterProps) => {
  const { theme, t } = props;
  return (
    <PaddingContainerwithBg>
      <FooterContainer theme={theme}>
        <FooterGrid>
          <GridItemFooterLeft>
            <FooterLeftContent theme={theme} />
          </GridItemFooterLeft>
          <GridItemFooterRight>
            <FooterLinksContent theme={theme} t={t} />
          </GridItemFooterRight>
          <GridItemFooterRight>
            <InfoContent theme={theme} t={t} />
          </GridItemFooterRight>
        </FooterGrid>
      </FooterContainer>
    </PaddingContainerwithBg>
  );
};
