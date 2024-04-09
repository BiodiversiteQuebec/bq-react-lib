import React, { useEffect, useState } from 'react';
import { AppModeProvider, TranslateWrapper } from '../../context';
import { PaddingContainerwithBg } from '../Common';
import { BQBarMenu } from './BQBarMenu';
import { BQHeaderItems } from './BQHeaderItems';
import { BQLogo } from './BQLogo';
import { BQUser } from './BQUser';
import { BQHeaderContainer } from './styles';

const locales: any = {
  en: {
    Atlas: 'Atlas',
    Indicateurs: 'Indicators',
    Découverte: 'Discovery',
    'Inventaire terrain': 'Field surveys',
    Accueil: 'Home',
    'À propos': 'About us',
    Équipe: 'Team',
    'Contactez-nous': 'Contact us',
    submit: 'Connect',
    signout: 'Signout',
  },
  fr: {
    Indicateurs: 'Indicateurs',
    Découverte: 'Découverte',
    'Inventaire terrain': 'Inventaires terrain',
    Accueil: 'Accueil',
    'À propos': 'À propos',
    Équipe: 'Équipe',
    'Contactez-nous': 'Contactez-nous',
    Atlas: 'Atlas',
    submit: 'Se connecter',
    signout: 'Se deconnecter',
  },
};
export const BQHeader = (props: any) => {
  //const logoUrl = props.logoUrl ?? `/images/logo-dark-mode-fr.png`;
  const {
    t = (text: string) => text,
    locale = 'fr' as string,
    switchLocaleFn,
    activePage,
    setActivePage,
    logoMode = 'non-color-dark',
    headerWidth = '1400px',
    user,
  } = props;
  const logoUrl = `/images/logo-${logoMode}-mode-fr.png`;

  const [collapse, setCollapse] = useState(true);

  const items = [
    {
      href: `/`,
      text: locales[locale]['Accueil'],
      key: 'accueil',
      color: '#efb850',
    },
    {
      href: `/atlas/`,
      text: locales[locale]['Atlas'],
      key: 'atlas',
      default: true,
      color: '#d88219',
    },
    {
      href: `/inventaires/`,
      text: locales[locale]['Inventaire terrain'],
      key: 'inventaire_terrain',
      color: '#57776e',
    },
    {
      href: `/indicateurs/`,
      text: locales[locale]['Indicateurs'],
      key: 'indicateur',
      default: true,
      color: '#a75822',
    },
    {
      href: `/decouverte/`,
      text: locales[locale]['Découverte'],
      key: 'decouverte',
      default: true,
      color: '#7ab5b0',
    },
  ];

  const barMenuItems = [
    {
      href: `https://biodiversite-quebec.ca/${locale}/`,
      text: locales[locale]['Accueil'],
      canHide: true,
    },
    {
      href: `https://biodiversite-quebec.ca/${locale}/atlas/`,
      text: locales[locale]['Atlas'],
      canHide: true,
    },
    {
      href: `https://biodiversite-quebec.ca/${locale}/inventaires/`,
      text: locales[locale]['Inventaire terrain'],
      canHide: true,
    },
    {
      href: `https://biodiversite-quebec.ca/${locale}/indicateurs/`,
      text: locales[locale]['Indicateurs'],
      canHide: true,
    },
    {
      href: `https://biodiversite-quebec.ca/${locale}/decouverte/`,
      text: locales[locale]['Découverte'],
      canHide: true,
    },
    {
      href: `https://biodiversite-quebec.ca/${locale}/a_propos/`,
      text: locales[locale]['À propos'],
    },
    {
      href: `https://biodiversite-quebec.ca/${locale}/equipe/`,
      text: locales[locale]['Équipe'],
    },

    {
      href: `https://biodiversite-quebec.ca/${locale}/contactez_nous/`,
      text: locales[locale]['Contactez-nous'],
    },
    {
      text: locale === 'fr' ? 'en' : 'fr',
      type: 'lang',
    },
    {
      href: user ? `/logout` : `/login`,
      text: user ? locales[locale]['signout'] : locales[locale]['submit'],
    },
  ];

  const selectedTab = (tabKey: string) => {
    if (setActivePage) setActivePage(tabKey);
    setCollapse((oldValue: boolean) => true);
  };

  useEffect(() => {
    let bqheader: any = document.querySelector('.bq-header');
    const mouseleave = (event: any) => {
      setCollapse((oldValue: boolean) => true);
    };
    if (bqheader) {
      bqheader.addEventListener('mouseleave', mouseleave);
      bqheader.addEventListener('click', mouseleave);
    }

    return () => {
      if (bqheader) {
        bqheader.removeEventListener('mouseleave', mouseleave);
        bqheader.removeEventListener('click', mouseleave);
      }
    };
  }, []);

  return (
    <Header
      onFocus={() => {
        setCollapse((oldValue: boolean) => true);
      }}
      headerWidth={headerWidth}
    >
      <BQLogo logoMode={logoMode} />
      <BQHeaderItems
        items={items}
        settedKey={activePage}
        selectedTab={selectedTab}
        locale={locale}
        tabClicked={activePage}
      />
      <div
        className="flex justify-center items-center"
        style={{
          display: 'flex',
          justifyContent: 'right',
          gap: '20px',
          width: '200px',
          marginRight: '30px',
        }}
      >
        <BQUser user={user} />

        <BQBarMenu
          items={barMenuItems}
          mainMenuItems={items}
          activePage={activePage}
          switchLocale={switchLocaleFn}
          defaultLocale={locale}
          forceCollapse={collapse}
          notifyChange={() => {
            setCollapse(!collapse);
          }}
        />
      </div>
    </Header>
  );
};

const Header = (props: any) => {
  const { children, headerWidth } = props;
  return (
    <AppModeProvider>
      <PaddingContainerwithBg>
        <BQHeaderContainer
          className="bq-header"
          tabIndex={-1}
          style={{ width: headerWidth }}
        >
          {children}
        </BQHeaderContainer>
      </PaddingContainerwithBg>
    </AppModeProvider>
  );
};
