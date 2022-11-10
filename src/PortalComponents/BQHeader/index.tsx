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
    switchFn,
    activePage,
    setActivePage,
    logoMode = 'non-color-dark',
  } = props;
  const logoUrl = `/images/logo-${logoMode}-mode-fr.png`;

  const [collapse, setCollapse] = useState(true);

  const items = [
    {
      href: 'https://biodiversite-quebec.ca/',
      text: 'Accueil',
      key: 'accueil',
    },
    {
      href: 'https://biodiversite-quebec.ca/inventaires/',
      text: 'Inventaire terrain',
      key: 'inventaire_terrain',
    },
    {
      href: 'https://biodiversite-quebec.ca/indicateurs',
      text: 'Indicateurs',
      key: 'indicateur',
      default: true,
    },
    {
      href: 'https://biodiversite-quebec.ca/atlas/',
      text: 'Atlas',
      key: 'atlas',
      default: true,
    },
    {
      href: 'https://biodiversite-quebec.ca/decouverte',
      text: 'Découverte',
      key: 'decouverte',
      default: true,
    },
  ];

  const barMenuItems = [
    {
      href: 'https://biodiversite-quebec.ca/',
      text: 'Accueil',
      canHide: true,
    },
    {
      href: 'https://biodiversite-quebec.ca/inventaires/',
      text: t('Inventaire terrain'),
      canHide: true,
    },
    {
      href: 'https://biodiversite-quebec.ca/indicateurs/',
      text: t('Indicateurs'),
      canHide: true,
    },
    {
      href: 'https://biodiversite-quebec.ca/atlas/',
      text: t('Atlas'),
      canHide: true,
    },
    {
      href: 'https://biodiversite-quebec.ca/decouverte/',
      text: t('Découverte'),
      canHide: true,
    },
    {
      href: 'https://biodiversite-quebec.ca/a_propos/',
      text: t('À propos'),
    },
    {
      href: 'https://biodiversite-quebec.ca/equipe/',
      text: t('Équipe'),
    },

    {
      href: 'https://biodiversite-quebec.ca/contactez_nous/',
      text: t('Contactez-nous'),
    } /* ,
    {
      text: locale === 'fr' ? t('en') : t('fr'),
      type: 'lang',
    }, */,
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
    >
      <BQLogo logoMode={logoMode} />
      <BQHeaderItems
        items={items}
        settedKey={activePage}
        selectedTab={selectedTab}
        tabClicked={activePage}
      />
      <div style={{ display: 'flex', flex: 1 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
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
  const { children } = props;
  return (
    <AppModeProvider>
      <PaddingContainerwithBg>
        <BQHeaderContainer className="bq-header" tabIndex={-1}>
          {children}
        </BQHeaderContainer>
      </PaddingContainerwithBg>
    </AppModeProvider>
  );
};
