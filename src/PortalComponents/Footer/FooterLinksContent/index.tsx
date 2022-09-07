import React from 'react';
import { CustomPathLink } from '../../Common/CustomPathLink';
import { SubTitleText } from '../../Text/textstyles';
import { InfoContentContainer } from '../FooterInfoContent/styles';

interface FooterProps {
  theme?: any;
  t?: (text: string) => string;
}

export const FooterLinksContent = (props: FooterProps) => {
  const { theme, t = (text) => text } = props;

  return (
    <InfoContentContainer theme={theme}>
      <SubTitleText>{t('contenu')}</SubTitleText>
      <ul>
        <li>
          <CustomPathLink href="/#">{t('inventaire_terrain')}</CustomPathLink>
        </li>
        <li>
          <CustomPathLink href="/#">
            {t('explorateur_boidiversite')}
          </CustomPathLink>
        </li>
        <li>
          <CustomPathLink href="/#">{t('biosave')}</CustomPathLink>
        </li>
        <li>
          <CustomPathLink href="/#">{t('indicateur')}</CustomPathLink>
        </li>
        <li>
          <CustomPathLink href="/biobalados">{t('biobalado')}</CustomPathLink>
        </li>
        <li>
          <CustomPathLink href="/#">{t('articles')}</CustomPathLink>
        </li>
      </ul>
    </InfoContentContainer>
  );
};
