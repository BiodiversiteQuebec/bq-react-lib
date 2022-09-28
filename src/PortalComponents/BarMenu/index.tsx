import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  BarMenuContainer,
  BarMenuBody,
  HamberguerFontAwesomeIcon,
} from './styles';
import { CustomPathLink } from '../Common/CustomPathLink';

interface BarMenuItem {
  href?: string;
  text: string;
  type?: string;
  submenuitems: BarMenuItem[];
}

interface Props {
  /**
   * function called when lossing focus (to collapse)
   */
  onBlur?: any;

  /**
   * function called to change locale (if the language list is added to the menu)
   */
  switchLocale?: any;

  /**
   * list the items of the bar menu
   */
  items?: BarMenuItem[];
}

export const BarMenu = (props: any) => {
  const [collapse, setCollapse] = useState(true);
  const {
    onBlur,
    switchLocale = (text: string) => text,
    items,
    defaultLocale,
  } = props;
  const [locale, setLocale] = useState(defaultLocale);

  const focusOut = (e: any) => {
    if (onBlur) onBlur();
  };

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  const changeLanguage = (text: string) => {
    const oldValue = switchLocale(text);
    setLocale(oldValue);
    toggleCollapse();
  };

  return (
    <BarMenuContainer tabIndex={0} onBlur={focusOut}>
      <HamberguerFontAwesomeIcon
        icon={faBars}
        className="fa-regular fa-1x"
        style={{ opacity: 0.7 }}
        onClick={toggleCollapse}
      />
      {!collapse && (
        <BarMenuBody tabIndex={0}>
          {items?.map((item: BarMenuItem) => {
            return item.type && item.type === 'lang' ? (
              <div
                className="language-item"
                key={item.text}
                onClick={() => changeLanguage(locale)}
              >
                <a>{`${locale.substring(0, 2).toUpperCase()}`}</a>
              </div>
            ) : (
              <div key={item.href} onClick={toggleCollapse}>
                <CustomPathLink href={item.href ?? '/#'}>
                  {item.text}
                </CustomPathLink>
              </div>
            );
          })}
        </BarMenuBody>
      )}
    </BarMenuContainer>
  );
};
