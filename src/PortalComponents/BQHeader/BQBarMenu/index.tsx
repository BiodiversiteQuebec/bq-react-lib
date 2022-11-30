import React, { useState, useContext, useEffect } from 'react';
//import TranslationContext from "../../../context/react/translation/TranslationContext";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  BarMenuContainer,
  BarMenuBody,
  HamberguerFontAwesomeIcon,
} from './styles';
import { CustomPathLink } from '../../Common/CustomPathLink';

interface BarMenuItem {
  href?: string;
  text: string;
  type?: string;
  canHide?: boolean;
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

export const BQBarMenu = (props: any) => {
  //const { t } = useContext(TranslationContext);
  //const [collapse, setCollapse] = useState(true);
  const {
    switchLocale = (text: string) => text,
    items,
    defaultLocale,
    forceCollapse = true,
    notifyChange = () => 0,
  } = props;
  const [locale, setLocale] = useState('fr');

  const toggleCollapse = () => {
    notifyChange();
  };

  const changeLanguage = (lang: string) => {
    switchLocale(lang === 'fr' ? 'en-US' : 'fr');
    setLocale(lang === 'fr' ? 'en-US' : 'fr');
    toggleCollapse();
  };

  useEffect(() => {
    let menuItems: any = null;
    const mousedown = () => {
      notifyChange();
    };
    const switchLanguage = () => {
      changeLanguage(locale);
    };
    if (window) {
      menuItems = document.querySelectorAll('.bar-menu-body > div');

      menuItems.forEach((item: any) => {
        if (item.className === 'language-item')
          item.addEventListener('mousedown', switchLanguage);
        //else item.addEventListener("mousedown", mousedown);
      });
    }

    return () => {
      if (menuItems) {
        menuItems.forEach((item: any) => {
          if (item.className === 'language-item')
            item.removeEventListener('mousedown', switchLanguage);
          //else item.removeEventListener("mousedown", mousedown);
        });
      }
    };
  }, [items]);

  useEffect(() => {
    setLocale(defaultLocale);
  }, [defaultLocale]);

  const localeLabel = locale === 'fr' ? 'English' : 'Français';

  return (
    <BarMenuContainer className="bar-menu-container" tabIndex={0}>
      <HamberguerFontAwesomeIcon
        icon={faBars}
        className="fa-regular fa-1x hamberguer-button"
        style={{ opacity: 0.7 }}
        onClick={toggleCollapse}
      />
      {!forceCollapse && (
        <BarMenuBody className="bar-menu-body" tabIndex={0}>
          {items?.map((item: BarMenuItem) => {
            return item.type && item.type === 'lang' ? (
              <div
                className="language-item"
                key={item.text === 'fr' ? 'English' : 'Français'}
                onClick={() => changeLanguage(locale)}
              >
                <a>{localeLabel.toUpperCase()}</a>
              </div>
            ) : (
              <div
                className={item.canHide ? 'bar-menu-hide' : ''}
                key={item.href}
                onClick={toggleCollapse}
              >
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
