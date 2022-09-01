import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  CustomTabs,
  CustomTab,
  CustomTabsWrapper,
  NonTabMenuItem,
} from './styles';
import 'bootstrap/dist/css/bootstrap.css';
import { CollapseMenuItem } from '../CollapseMenuItem';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { Carousel } from '../../Carousel';
import { CustomPathLink } from '../../Common/CustomPathLink';

interface Props {
  tabcontentWidth: number;
  left: number;
  top: number;
  collapseAll: boolean;
  t?: (text: string) => string;
  tabCardsLists: any;
}
export const TabMenu = (props: Props) => {
  const [settedKey, setSettedKey] = useState('');
  const [tabClicked, setTabClicked] = useState('acceuil');
  const size: any = useWindowDimensions();
  const {
    collapseAll = true,
    tabcontentWidth,
    tabCardsLists = [[], [], []],
    t = (text: string) => text,
  } = props;

  const tab1Cards = tabCardsLists.length > 0 ? tabCardsLists[0] : [];
  const tab2Cards = tabCardsLists.length > 1 ? tabCardsLists[1] : [];
  const tab3Cards = tabCardsLists.length > 2 ? tabCardsLists[2] : [];

  const selectedTab = (tabKey: string) => {
    setSettedKey(tabKey === settedKey ? '' : tabKey);
    setTabClicked(tabKey);
  };

  useEffect(() => {
    setSettedKey('');
  }, [collapseAll]);

  useEffect(() => {
    const tabcontent: any = document.getElementsByClassName('tab-content');

    if (tabcontent.length > 0 && size) {
      //tabcontent[0].style.width = `${size.width - 25}px`;
    }
  }, [size]);

  useLayoutEffect(() => {
    const tabcontent: any = document.getElementsByClassName('tab-content');
    if (tabcontent.length > 0) {
      tabcontent[0].style.width = `${tabcontentWidth}px`;
    }
  }, [tabcontentWidth]);

  const internalleft = 85;
  const internaltop = 18;

  return (
    <div tabIndex={-1}>
      <NonTabMenuItem
        style={{
          left: props.left
            ? `${props.left - internalleft}px`
            : `${internalleft + 105}px`,
          top: props.top ? `${props.top + internaltop}px` : `${internaltop}px`,
        }}
      >
        <CustomPathLink href="/#" className="no-decoration">
          <CollapseMenuItem
            text={t('acceuil')}
            collapse={true || collapseAll}
            opacity={tabClicked !== 'acceuil' ? 0.7 : 1}
            notifyEvent={(param: any) => selectedTab('acceuil')}
            hidearrow={true}
          />
        </CustomPathLink>
      </NonTabMenuItem>

      <CustomTabsWrapper left={props.left} top={props.top}>
        <CustomTabs
          defaultActiveKey={''}
          activeKey={collapseAll ? '' : settedKey}
          id="uncontrolled-tab-example"
        >
          <CustomTab
            eventKey="inv_terrain"
            title={
              <CollapseMenuItem
                text={t('inventaire_terrain')}
                collapse={
                  (settedKey === 'inv_terrain' ? false : true) || collapseAll
                }
                opacity={tabClicked !== 'inv_terrain' ? 0.7 : 1}
                notifyEvent={(param: any) => selectedTab('inv_terrain')}
              />
            }
          >
            {tabcontentWidth > 0 ? (
              <div
                style={{
                  width: `${tabcontentWidth}px`,
                  minWidth: `${tabcontentWidth}px`,
                }}
              >
                <Carousel
                  onClick={() => {
                    selectedTab('');
                  }}
                  cards={tab1Cards}
                />
              </div>
            ) : null}
          </CustomTab>
          <CustomTab
            eventKey="exp_biodiversite"
            title={
              <CollapseMenuItem
                text={t('explorateur_boidiversite')}
                collapse={
                  (settedKey === 'exp_biodiversite' ? false : true) ||
                  collapseAll
                }
                opacity={tabClicked !== 'exp_biodiversite' ? 0.7 : 1}
                notifyEvent={(param: any) => selectedTab('exp_biodiversite')}
              />
            }
          >
            {tabcontentWidth ? (
              <div
                style={{
                  width: `${tabcontentWidth}px`,
                  minWidth: `${tabcontentWidth}px`,
                }}
              >
                <Carousel
                  onClick={() => {
                    selectedTab('');
                  }}
                  cards={tab2Cards}
                />
              </div>
            ) : null}
          </CustomTab>
          <CustomTab
            eventKey="indicateur"
            title={
              <CollapseMenuItem
                text={t('indicateur')}
                collapse={
                  (settedKey === 'indicateur' ? false : true) || collapseAll
                }
                opacity={tabClicked !== 'indicateur' ? 0.7 : 1}
                notifyEvent={(param: any) => selectedTab('indicateur')}
              />
            }
          >
            {tabcontentWidth ? (
              <div
                style={{
                  width: `${tabcontentWidth}px`,
                  minWidth: `${tabcontentWidth}px`,
                }}
              >
                <Carousel
                  onClick={() => {
                    selectedTab('');
                  }}
                  cards={tab3Cards}
                />
              </div>
            ) : null}
          </CustomTab>
        </CustomTabs>
      </CustomTabsWrapper>
      <NonTabMenuItem
        style={{
          left: props.left
            ? `${props.left + internalleft + 497}px`
            : `${internalleft + 497}px`,
          top: props.top
            ? `${props.top + internaltop - 2}px`
            : `${internaltop - 2}px`,
        }}
      >
        <CustomPathLink href="/#" className="no-decoration">
          {' '}
          <CollapseMenuItem
            text={t('decouverte')}
            collapse={true || collapseAll}
            opacity={tabClicked !== 'decouverte' ? 0.7 : 1}
            notifyEvent={(param: any) => selectedTab('decouverte')}
            hidearrow={true}
          />
        </CustomPathLink>
      </NonTabMenuItem>
    </div>
  );
};
