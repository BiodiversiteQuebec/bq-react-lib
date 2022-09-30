import React from 'react';
import { CustomPathLink } from '../../Common/CustomPathLink';
import { SubTitleText } from '../../Text/textstyles';
import { InfoContentContainer, Icons } from './styles';
import { SocialNetworkBoxContainer } from '../../SocialNetworkBox';

interface FooterProps {
  theme?: any;
  t?: (key: string) => string;
}

const SocialNetworkBox = (props: FooterProps) => {
  const { theme } = props;
  return (
    <SocialNetworkBoxContainer theme={theme}>
      <CustomPathLink href="/#">
        <Icons
          className="my-icon"
          alt="facebook"
          src={'/images/facebook-brands.svg'}
        />
      </CustomPathLink>

      <CustomPathLink href="/#">
        <Icons alt="instagram" src={'/images/instagram-brands.svg'} />
      </CustomPathLink>

      <CustomPathLink href="/#">
        <Icons alt="twitter" src={'/images/twitter-brands.svg'} />
      </CustomPathLink>

      <CustomPathLink href="/#">
        <Icons alt="mail" src={'/images/envelope-regular.svg'} />
      </CustomPathLink>
    </SocialNetworkBoxContainer>
  );
};

export const InfoContent = (props: FooterProps) => {
  const { theme, t = (text: string) => text } = props;

  return (
    <InfoContentContainer theme={theme}>
      <SubTitleText>{t('Organisations')}</SubTitleText>
      <ul>
        <li>
          <CustomPathLink href="https://biodiversite-quebec.ca/team">
            {t('Équipe')}
          </CustomPathLink>
        </li>
        <li>
          <CustomPathLink href="https://biodiversite-quebec.ca/partners">
            {t('Partenaires')}
          </CustomPathLink>
        </li>
        <li>
          <CustomPathLink href="https://biodiversite-quebec.ca/about">
            {t('À propos')}
          </CustomPathLink>
        </li>
        <li>
          <CustomPathLink href="https://biodiversite-quebec.ca/contactus">
            {t('Contactez nous')}
          </CustomPathLink>
        </li>
      </ul>
      <SocialNetworkBox />
    </InfoContentContainer>
  );
};
