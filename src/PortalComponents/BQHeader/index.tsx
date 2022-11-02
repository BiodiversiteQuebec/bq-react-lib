import React, { useEffect, useState } from 'react';
import { BQBarMenu } from './BQBarMenu';
import { BQHeaderItems } from './BQHeaderItems';
import { BQLogo } from './BQLogo';
import { BQHeaderContainer } from './styles';

export const BQHeader = (props: any) => {
  //const logoUrl = props.logoUrl ?? `/images/logo-dark-mode-fr.png`;
  const {
    t,
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
      href: '/#',
      text: t('accueil'),
      key: 'accueil',
    },
    {
      href: 'https://biodiversite-quebec.ca/inventaires/',
      text: t('inventaire_terrain'),
      key: 'inventaire_terrain',
    },
    {
      href: '/indicateurs',
      text: t('indicateur'),
      key: 'indicateur',
    },
    {
      href: 'https://biodiversite-quebec.ca/atlas/',
      text: t('atlas'),
      key: 'atlas',
    },
    {
      href: '/decouverte',
      text: t('decouverte'),
      key: 'decouverte',
    },
  ];

  const barMenuItems = [
    {
      href: '/#',
      text: t('accueil'),
      canHide: true,
    },
    {
      href: 'https://biodiversite-quebec.ca/inventaires/',
      text: t('inventaire_terrain'),
      canHide: true,
    },
    {
      href: '/indicateurs',
      text: t('indicateur'),
      canHide: true,
    },
    {
      href: 'https://biodiversite-quebec.ca/atlas/',
      text: t('atlas'),
      canHide: true,
    },
    {
      href: '/decouverte',
      text: t('decouverte'),
      canHide: true,
    },
    {
      href: '/a_propos',
      text: t('propos'),
    },
    {
      href: '/equipe',
      text: t('equipe'),
    },

    {
      href: '/contactez_nous',
      text: t('contacteznous'),
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
      <BQLogo logoUrl={logoUrl} />
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
    <BQHeaderContainer className="bq-header" tabIndex={-1}>
      {children}
    </BQHeaderContainer>
  );
};
