import React from 'react';
import { CustomPathLink } from '../../Common/CustomPathLink';
import { LogoImage, LogoDiv } from './styles';
import logo_color from './logo-color-dark-mode-fr.png';
import non_logo_color from './logo-non-color-dark-mode-fr.png';

const get_Logo = (logoMode: string) => {
  switch (logoMode) {
    case 'non-color-dark':
      return non_logo_color;

    case 'color-dark':
      return logo_color;

    default:
      return non_logo_color;
  }
};

export const BQLogo = (props: any) => {
  const { logoUrl, logoMode } = props;

  const logo = get_Logo(logoMode);
  return logoMode ? (
    <CustomPathLink href="/#">
      <LogoDiv>
        <LogoImage className="logo" src={logo} alt="logo" />
      </LogoDiv>
    </CustomPathLink>
  ) : null;
};
