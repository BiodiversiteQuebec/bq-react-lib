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
      <SubTitleText>{t('organisations')}</SubTitleText>
      <ul>
        <li>
          <CustomPathLink href="/team">{t('equipe')}</CustomPathLink>
        </li>
        <li>
          <CustomPathLink href="/partners">{t('partenaires')}</CustomPathLink>
        </li>
        <li>
          <CustomPathLink href="/about">{t('propos')}</CustomPathLink>
        </li>
        <li>
          <CustomPathLink href="/contactus">
            {t('contacteznous')}
          </CustomPathLink>
        </li>
      </ul>
      <SocialNetworkBox />
    </InfoContentContainer>
  );
};
