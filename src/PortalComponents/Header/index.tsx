import React, { useState, useRef } from 'react';
import useComponentSize from '../../hooks/useComponentDimensions';
import _, { isArray } from 'underscore';
import { CollapseMenuItem } from '../CollapseMenuItem';
import { Carousel } from '../Carousel';

import { HeaderContainerV1 } from './styles';
import { CustomPathLink } from '../Common/CustomPathLink';
import { BarMenu } from '../BarMenu';
import { PaddingContainerwithBg } from '../Common/Layouts';

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
  const targetRef = useRef(null);
  const { height } = useComponentSize(targetRef);

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
  logoUrl,
}: any) => {
  const [settedKey, setSettedKey] = useState('');
  const [tabClicked, setTabClicked] = useState('acceuil');

  const tab1Cards = tabCardsLists.length > 0 ? tabCardsLists[0] : [];
  const tab2Cards = tabCardsLists.length > 1 ? tabCardsLists[1] : [];
  const tab3Cards = tabCardsLists.length > 2 ? tabCardsLists[2] : [];

  const selectedTab = (tabKey: string) => {
    setSettedKey(tabKey === settedKey ? '' : tabKey);
    setTabClicked(tabKey);
  };

  const logo = (
    <CustomPathLink href="/#">
      <img
        src={logoUrl}
        width={'185px'}
        style={{ maxHeight: '75px', objectFit: 'cover' }}
      />
    </CustomPathLink>
  );

  const rightSideComponents = <BarMenu onBlur={() => setSettedKey('')} />;

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
        <HeaderNavItem
          key={'accueil'}
          title={
            <CustomPathLink href="/#" className="no-decoration">
              <CollapseMenuItem
                text={t('accueil')}
                collapse={settedKey === 'accueil' ? false : true}
                opacity={tabClicked !== 'accueil' ? 0.7 : 1}
                notifyEvent={(param: any) => selectedTab('accueil')}
                hidearrow={true}
              />
            </CustomPathLink>
          }
        />
        <HeaderNavItem
          key={'inv_terrain'}
          title={
            <CollapseMenuItem
              text={t('inventaire_terrain')}
              collapse={settedKey === 'inv_terrain' ? false : true}
              opacity={tabClicked !== 'inv_terrain' ? 0.7 : 1}
              notifyEvent={(param: any) => selectedTab('inv_terrain')}
            />
          }
        >
          <Carousel
            onClick={(e: any) => {
              //to close the tab
              setSettedKey('');
            }}
            cards={tab1Cards}
          />
        </HeaderNavItem>
        <HeaderNavItem
          key={'indicateur'}
          title={
            <CollapseMenuItem
              text={t('indicateur')}
              collapse={settedKey === 'indicateur' ? false : true}
              opacity={tabClicked !== 'indicateur' ? 0.7 : 1}
              notifyEvent={(param: any) => selectedTab('indicateur')}
            />
          }
        >
          <Carousel
            onClick={() => {
              //to close the tab
              setSettedKey('');
            }}
            cards={tab2Cards}
          />
        </HeaderNavItem>
        <HeaderNavItem
          key={'exp_biodiversite'}
          title={
            <CollapseMenuItem
              text={t('explorateur_boidiversite')}
              collapse={settedKey === 'exp_biodiversite' ? false : true}
              opacity={tabClicked !== 'exp_biodiversite' ? 0.7 : 1}
              notifyEvent={(param: any) => selectedTab('exp_biodiversite')}
            />
          }
        >
          <Carousel
            onClick={() => {
              //to close the tab
              setSettedKey('');
            }}
            cards={tab3Cards}
          />
        </HeaderNavItem>
        <HeaderNavItem
          key={'decouverte'}
          title={
            <CustomPathLink href="/#" className="no-decoration">
              {' '}
              <CollapseMenuItem
                text={t('decouverte')}
                collapse={settedKey === 'decouverte' ? false : true}
                opacity={tabClicked !== 'decouverte' ? 0.7 : 1}
                notifyEvent={(param: any) => selectedTab('decouverte')}
                hidearrow={true}
              />
            </CustomPathLink>
          }
        />
      </Header>
    </PaddingContainerwithBg>
  );
};
