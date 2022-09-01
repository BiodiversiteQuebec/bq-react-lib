import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { BarMenuContainer, BarMenuBody } from './styles';
import { CustomPathLink } from '../../Common/CustomPathLink';

export const BarMenu = (props: any) => {
  const [collapse, setCollapse] = useState(true);
  const t = (text: string) => text;
  const { onBlur } = props;

  const focusOut = (e: any) => {
    if (onBlur) onBlur();
    //setCollapse(true);
  };

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };
  return (
    <BarMenuContainer tabIndex={0} onBlur={focusOut}>
      <FontAwesomeIcon
        icon={faBars}
        className="fa-regular fa-1x"
        style={{ opacity: 0.7 }}
        onClick={toggleCollapse}
      />
      {!collapse && (
        <BarMenuBody onClick={toggleCollapse} tabIndex={0}>
          <CustomPathLink href="/biobalados">
            <div>{t('biobalado')}</div>
          </CustomPathLink>
          <CustomPathLink href="/team">
            {' '}
            <div>{t('equipe')}</div>
          </CustomPathLink>
          <CustomPathLink href="/partners">
            {' '}
            <div>{t('partenaires')}</div>
          </CustomPathLink>
          <CustomPathLink href="/about">
            <div>{t('propos')}</div>
          </CustomPathLink>
          <CustomPathLink href="/contactus">
            <div>{t('contacteznous')}</div>
          </CustomPathLink>
        </BarMenuBody>
      )}
    </BarMenuContainer>
  );
};
