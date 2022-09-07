import React from 'react';
import { FooterLeftContentContainer, FooterImg } from './styles';

interface FooterProps {
  theme?: any;
}

export const FooterLeftContent = (props: FooterProps) => {
  const { theme } = props;
  const finalMode = theme ? theme.mode : 'dark';

  return (
    <FooterLeftContentContainer theme={theme}>
      <FooterImg
        src={`/images/logofooter-${finalMode}-mode-fr.png`}
        alt="footer-image"
      />
    </FooterLeftContentContainer>
  );
};
