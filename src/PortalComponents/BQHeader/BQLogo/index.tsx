import React from 'react';
import { CustomPathLink } from '../../Common/CustomPathLink';
import { LogoImage } from './styles';

export const BQLogo = (props: any) => {
  const { logoUrl } = props;
  return logoUrl ? (
    <CustomPathLink href="/#">
      <LogoImage className="logo" src={logoUrl} alt="logo" />
    </CustomPathLink>
  ) : null;
};
