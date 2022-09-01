import React, { useContext } from 'react';
import ModeContext from '../../../context/mode';
import { FooterLeftContentContainer, FooterImg } from './styles';

interface FooterProps {
  theme?: any;
}

export const FooterLeftContent = (props: FooterProps) => {
  const { mode } = useContext(ModeContext);
  const { theme } = props;
  const finalMode = theme ? theme.mode : mode;

  return (
    <FooterLeftContentContainer theme={theme}>
      <FooterImg
        src={`/images/logofooter-${finalMode}-mode-fr.png`}
        alt="footer-image"
      />
    </FooterLeftContentContainer>
  );
};
