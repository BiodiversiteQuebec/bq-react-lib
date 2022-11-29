import React, { useEffect, useState } from 'react';
import { AppModeProvider, TranslateWrapper } from '../../context';
import { PaddingContainerwithBg } from '../Common';
import { BQBarMenu } from './BQBarMenu';
import { BQHeaderItems } from './BQHeaderItems';
import { BQLogo } from './BQLogo';
import { BQHeaderContainer } from './styles';

export const BQHeader = (props: any) => {
  //const logoUrl = props.logoUrl ?? `/images/logo-dark-mode-fr.png`;
  const {
    t = (text: string) => text,
    locale = 'fr',
    switchLanguageFn,
    activePage,
    setActivePage,
    logoMode = 'non-color-dark',
    headerWidth = '1400px',
  } = props;
  const logoUrl = `/images/logo-${logoMode}-mode-fr.png`;

  const [collapse, setCollapse] = useState(true);

  const items = [
    {
      href: `https://biodiversite-quebec.ca/${locale}/`,
      text: t('Accueil'),
      key: 'accueil',
      color: '#efb850',
    },
    {
      href: `https://biodiversite-quebec.ca/${locale}/inventaires/`,
      text: t('Inventaire terrain'),
      key: 'inventaire_terrain',
      color: '#57776e',
    },
    {
      href: `https://biodiversite-quebec.ca/${locale}/indicateurs/`,
      text: t('Indicateurs'),
      key: 'indicateur',
      default: true,
      color: '#a75822',
    },
    {
      href: `https://biodiversite-quebec.ca/${locale}/atlas/`,
      text: t('Atlas'),
      key: 'atlas',
      default: true,
      color: '#d88219',
    },
    {
      href: `https://biodiversite-quebec.ca/${locale}/decouverte/`,
      text: t('Découverte'),
      key: 'decouverte',
      default: true,
      color: '#7ab5b0',
    },
  ];

  const barMenuItems = [
    {
      href: `https://biodiversite-quebec.ca/${locale}/`,
      text: t('Accueil'),
      canHide: true,
    },
    {
      href: `https://biodiversite-quebec.ca/${locale}/inventaires/`,
      text: t('Inventaire terrain'),
      canHide: true,
    },
    {
      href: `https://biodiversite-quebec.ca/${locale}/indicateurs/`,
      text: t('Indicateurs'),
      canHide: true,
    },
    {
      href: `https://biodiversite-quebec.ca/${locale}/atlas/`,
      text: t('Atlas'),
      canHide: true,
    },
    {
      href: `https://biodiversite-quebec.ca/${locale}/decouverte/`,
      text: t('Découverte'),
      canHide: true,
    },
    {
      href: `https://biodiversite-quebec.ca/${locale}/a_propos/`,
      text: t('À propos'),
    },
    {
      href: `https://biodiversite-quebec.ca/${locale}/equipe/`,
      text: t('Équipe'),
    },

    {
      href: `https://biodiversite-quebec.ca/${locale}/contactez_nous/`,
      text: t('Contactez-nous'),
    },
    {
      text: locale === 'fr' ? t('en') : t('fr'),
      type: 'lang',
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
        tabClicked={activePage}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'right',
          gap: '20px',
          width: '200px',
          marginRight: '30px',
        }}
      >
        <BQBarMenu
          items={barMenuItems}
          switchLocale={switchFn}
          defaultLocale={locale === 'fr' ? 'en-US' : 'fr'}
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
