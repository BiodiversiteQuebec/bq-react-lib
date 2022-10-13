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
import { AppModeProvider, TranslateWrapper } from '../../context';

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

/**
 * component that wraps the theme and translation context and makes it available to all children elements
 * @param props
 * @returns
 */
const FooterWrapper = (props: any) => {
  return (
    <AppModeProvider>
      <TranslateWrapper>{props.children}</TranslateWrapper>
    </AppModeProvider>
  );
};

export const BQFooter = (props: any) => {
  const { themes } = props;
  return (
    <FooterWrapper>
      <Footer theme={themes?.darkMode} />
    </FooterWrapper>
  );
};
