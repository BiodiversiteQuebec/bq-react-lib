import React, { useState, useRef } from 'react';
import { useBbox } from '../../hooks/useElementDimension';

import _, { isArray } from 'underscore';
import { CollapseMenuItem } from '../CollapseMenuItem';
import { Carousel } from '../Carousel';

import { HeaderContainerV1, Logo } from './styles';
import { CustomPathLink } from '../Common/CustomPathLink';
import { BarMenu } from '../BarMenu';
import { PaddingContainerwithBg } from '../Common/Layouts';
import { AppModeProvider } from '../../context';
export const HeaderNavItem = (props: any) => {
  return props.children;
};

interface HeaderProps {
  links?: any;
  children?: any;
  activeItem?: string;
  defaultActiveKey?: string;
  logo?: any;
  onBlur?: any;
  rightSideComponents?: any;
}

export const Header = ({
  children,
  activeItem,
  onBlur,
  logo,
  rightSideComponents,
}: HeaderProps) => {
  const [bbox, targetRef] = useBbox();
  const { height } = bbox;

  let items: any[] = [];
  if (children && !isArray(children)) items = [children];
  else items = children;
  const keys = items.map((item: any) => item.key);

  return (
    <HeaderContainerV1
      ref={targetRef}
      tabIndex={-1}
      className="bq-nav"
      onBlur={() => {
        if (onBlur) onBlur();
      }}
    >
      <div>{logo ? logo : null}</div>
      <ul className="custom-nav">
        {items.map((item: any, index: number) => {
          return (
            <li key={_.uniqueId(item.props.title ?? '')}>
              <div style={{ zIndex: 50 }}>
                {item.props ? item.props.title : ''}
              </div>
              {keys[index] === activeItem && height ? (
                <div
                  className="tab_content"
                  style={{ top: `${height}px`, zIndex: 1 }}
                >
                  {item.props ? item.props.children : ''}
                </div>
              ) : (
                ''
              )}
            </li>
          );
        })}
      </ul>
      <div className="right-side">
        {rightSideComponents ? rightSideComponents : null}
      </div>
    </HeaderContainerV1>
  );
};

export const CustomHeader = ({
  t = (text: string) => text,
  tabCardsLists = [[], [], []],
  items = [],
  logoUrl,
  rightSideComponents,
  activePage,
}: any) => {
  const [settedKey, setSettedKey] = useState('');
  const [tabClicked, setTabClicked] = useState('accueil');

  const selectedTab = (tabKey: string) => {
    setSettedKey(tabKey === settedKey ? '' : tabKey);
    setTabClicked(tabKey);
  };

  const logo = (
    <CustomPathLink href="/#">
      <Logo src={logoUrl} alt="logo" />
    </CustomPathLink>
  );

  return (
    <PaddingContainerwithBg>
      <Header
        activeItem={settedKey}
        onBlur={() => {
          setSettedKey('');
        }}
        logo={logo}
        rightSideComponents={rightSideComponents}
      >
        {items.map((item: any) => {
          const { key, text, href } = item;
          return (
            <HeaderNavItem
              key={key}
              disbaleCollapse={true}
              class="bq-nav-item"
              title={
                <a href={href} className="no-decoration">
                  <CollapseMenuItem
                    text={text}
                    collapse={settedKey === key ? false : true}
                    highlight={tabClicked === key || activePage === key}
                    notifyEvent={(param: any) => selectedTab(key)}
                    hidearrow={true}
                    className={activePage === key ? 'active' : ''}
                  />
                </a>
              }
            />
          );
        })}
      </Header>
    </PaddingContainerwithBg>
  );
};

export const BQHeaderWithoutProvider = (props: any) => {
  const {
    locale = 'fr',
    t = (text: string) => text,
    switchFn,
    activePage,
    logoMode = 'dark',
  } = props;

  let logoUrl = `/images/logo-dark-mode-fr.svg`;
  if (logoMode == 'darkColor') {
    logoUrl = `/images/logofooter-dark-mode-fr.png`;
  }

  logoUrl = `/images/logofooter-dark-mode-${logoMode}-fr.png`;

  const [settedKey, setSettedKey] = useState('');

  const barMenuItems = [
    {
      href: 'https://biodiversite-quebec.ca/inventaires/',
      text: t('inventaire terrain'),
      canHide: true,
    },
    {
      href: 'https://biodiversite-quebec.ca/indicateurs/',
      text: t('indicateur'),
      canHide: true,
    },
    {
      href: 'https://biodiversite-quebec.ca/atlas/',
      text: t('atlas'),
      canHide: true,
    },
    {
      href: 'https://biodiversite-quebec.ca/decouverte',
      text: t('decouverte'),
      canHide: true,
    },
    ,
    {
      href: 'https://biodiversite-quebec.ca/equipe/',
      text: t('Équipe'),
    },
    {
      href: 'https://biodiversite-quebec.ca/a_propos/',
      text: t('À propos'),
    },
    {
      href: 'https://biodiversite-quebec.ca/contactez_nous/',
      text: t('Contactez-nous'),
    } /* ,
    {
      text: locale === 'fr' ? 'en-US' : 'fr',
      type: 'lang',
    }, */,
  ];

  const rightSideComponents = (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        cursor: 'pointer',
      }}
    >
      <BarMenu
        items={barMenuItems}
        onBlur={() => setSettedKey('')}
        switchLocale={switchFn}
        defaultLocale={locale === 'fr' ? 'en-US' : 'fr'}
      />
    </div>
  );

  const items = [
    {
      href: 'https://biodiversite-quebec.ca/',
      text: 'Accueil',
      key: 'accueil',
      default: true,
    },
    {
      href: 'https://biodiversite-quebec.ca/inventaires/',
      text: 'Inventaires terrain',
      key: 'inventaire_terrain',
      default: false,
    },
    {
      href: 'https://biodiversite-quebec.ca/indicateurs/',
      text: 'Indicateurs',
      key: 'indicateurs',
      default: false,
    },
    {
      href: 'https://biodiversite-quebec.ca/atlas/',
      text: 'Atlas',
      key: 'atlas',
      default: false,
    },
    {
      href: 'https://biodiversite-quebec.ca/decouverte',
      text: 'Découverte',
      key: 'decouverte',
      default: false,
    },
  ];

  return (
    <CustomHeader
      logoUrl={logoUrl}
      items={items}
      t={t}
      settedKey={settedKey}
      rightSideComponents={rightSideComponents}
      activePage={activePage}
    />
  );
};

const BQHeader = (props: any) => (
  <AppModeProvider>
    <BQHeaderWithoutProvider {...props} />
  </AppModeProvider>
);
