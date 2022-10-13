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
}: any) => {
  const [settedKey, setSettedKey] = useState('');
  const [tabClicked, setTabClicked] = useState('acceuil');

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
              title={
                <a href={href} className="no-decoration">
                  <CollapseMenuItem
                    text={text}
                    collapse={settedKey === key ? false : true}
                    opacity={tabClicked !== key ? 0.7 : 1}
                    notifyEvent={(param: any) => selectedTab(key)}
                    hidearrow={true}
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
  const { locale = 'fr', t = (text: string) => text, switchFn } = props;
  const logoUrl = `/images/logo-dark-mode-fr.svg`;
  const [settedKey, setSettedKey] = useState('');

  const barMenuItems = [
    {
      href: 'https://biodiversite-quebec.ca/biobalados',
      text: t('Bio-balado'),
    },
    {
      href: 'https://biodiversite-quebec.ca/team',
      text: t('Équipe'),
    },
    {
      href: 'https://biodiversite-quebec.ca/partners',
      text: t('Partenaires'),
    },
    {
      href: 'https://biodiversite-quebec.ca/about',
      text: t('À propos'),
    },
    {
      href: 'https://biodiversite-quebec.ca/contactus',
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
      text: 'Inventaires Terrain',
      key: 'inventaire_terrain',
      default: false,
    },
    {
      href: 'https://biodiversite-quebec.ca/inventaires/',
      text: 'Indicateur',
      key: 'indicateur',
      default: false,
    },
    {
      href: 'https://biodiversite-quebec.ca/explorateurs/',
      text: 'Explorateur',
      key: 'explorateur_boidiversite',
      default: false,
    },
    {
      href: 'https://biodiversite-quebec.ca/',
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
    />
  );
};

export const BQHeader = () => (
  <AppModeProvider>
    <BQHeaderWithoutProvider />
  </AppModeProvider>
);
