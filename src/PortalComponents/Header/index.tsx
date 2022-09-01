/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useLayoutEffect } from 'react';

import { TabMenu } from './TabMenu';
import { BarMenu } from './BarMenu';

import { CustomPathLink } from '../Common/CustomPathLink';
import {
  HeaderV1Container,
  LogoContainer as LContainer,
  HeaderLinkContainer,
  HeaderBtContainer,
} from './styles';

import { PaddingContainerwithBg } from '../Common/Layouts';

interface Props {
  t?: (text: string) => string;
  mode?: string;
  tabCardsLists?: any;
  logoUrl?: string;
}
export const Header = (props: Props) => {
  const {
    tabCardsLists = [[], [], []],
    logoUrl,
    t = (text: string) => text,
  } = props;
  const [collapseAllTabs, setCollapseAllTabs] = useState(false);
  const ref: any = useRef(null);
  const [offsetWidth, setOffsetWith] = useState(0);

  useLayoutEffect(() => {
    setOffsetWith(ref.current.offsetWidth);
  }, []);

  return (
    <PaddingContainerwithBg>
      <HeaderV1Container ref={ref}>
        <LContainer>
          <CustomPathLink href="/#">
            <img
              src={logoUrl}
              width={'145px'}
              style={{
                position: 'absolute',
                top: '-28px',
                left: '-15px',
              }}
            />
          </CustomPathLink>
        </LContainer>
        <HeaderLinkContainer tabIndex={-1}>
          <TabMenu
            collapseAll={collapseAllTabs}
            left={300}
            top={5}
            tabcontentWidth={offsetWidth}
            tabCardsLists={tabCardsLists}
            t={t}
          />
        </HeaderLinkContainer>
        <HeaderBtContainer tabIndex={-1}>
          <div
            className="right-side-pane"
            onFocus={() => setCollapseAllTabs(true)}
          >
            <div className="right-side-item">
              <BarMenu onBlur={() => setCollapseAllTabs(false)} />
            </div>
          </div>
        </HeaderBtContainer>
      </HeaderV1Container>
    </PaddingContainerwithBg>
  );
};
