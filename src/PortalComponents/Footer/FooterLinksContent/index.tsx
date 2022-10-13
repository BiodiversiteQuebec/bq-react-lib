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
      <SubTitleText>{t('Contenu')}</SubTitleText>
      <ul>
        <li>
          <a href="https://biodiversite-quebec.ca/inventaires/">
            {t('Inventaire Terrain')}
          </a>
        </li>
        <li>
          <a href="https://coleo.biodiversite-quebec.ca/apps/tableau-atlas-react/">
            {t('Explorateur')}
          </a>
        </li>
        {/*  <li>
          <CustomPathLink href="/#">{t('biosave')}</CustomPathLink>
        </li> */}
        <li>
          <a href="https://coleo.biodiversite-quebec.ca/apps/tableaulpi/">
            {t('Indicateur')}
          </a>
        </li>
        {/* <li>
          <CustomPathLink href="/biobalados">{t('biobalado')}</CustomPathLink>
        </li> */}
        <li>
          <CustomPathLink href="https://biodiversite-quebec.ca/histories">
            {t('Articles')}
          </CustomPathLink>
        </li>
      </ul>
    </InfoContentContainer>
  );
};
