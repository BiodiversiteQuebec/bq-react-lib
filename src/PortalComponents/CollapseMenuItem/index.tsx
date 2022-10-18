import React, { useState } from 'react';
import {
  CollapseMenuItemContainer,
  CollapseMenuItemFontAwesomeIcon,
  CollapseMenuText,
} from './styles';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export const CollapseMenuItem = (props: any) => {
  const {
    text = '',
    collapse = true,
    highlight = false,
    notifyEvent = (obj: any) => obj,
    hidearrow = false,
  } = props;

  const [active, setActive] = useState(false);

  const toggle = (e: any) => {
    notifyEvent(text);
    setActive(true);
  };
  let fontWeight = 600;
  if (highlight) {
    fontWeight = 800;
  }
  return (
    <CollapseMenuItemContainer
      onClick={toggle}
      tabIndex={-1}
      onBlur={() => setActive(false)}
    >
      <CollapseMenuText
        style={{
          fontWeight: { fontWeight },
        }}
        className="bq-menu-text"
        active={active}
      >
        {text}
      </CollapseMenuText>
      {!hidearrow &&
        (collapse ? (
          <CollapseMenuItemFontAwesomeIcon
            icon={faChevronDown}
            className="fa-regular fa-1x"
            style={{ fontWeight: { fontWeight } }}
          />
        ) : (
          <CollapseMenuItemFontAwesomeIcon
            icon={faChevronUp}
            className="fa-regular fa-1x"
            style={{ fontWeight: { fontWeight } }}
          />
        ))}
    </CollapseMenuItemContainer>
  );
};
