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
    className = '',
    opacity = 0.7,
    active,
    color,
  } = props;

  //const [active, setActive] = useState(false);

  const toggle = (e: any) => {
    notifyEvent(text);
    //setActive(true);
  };
  return (
    <CollapseMenuItemContainer onClick={toggle}>
      <CollapseMenuText opacity={opacity} active={active} color={color}>
        {text}
      </CollapseMenuText>
      {!hidearrow &&
        (collapse ? (
          <CollapseMenuItemFontAwesomeIcon
            icon={faChevronDown}
            className="fa-regular fa-1x"
          />
        ) : (
          <CollapseMenuItemFontAwesomeIcon
            icon={faChevronUp}
            className="fa-regular fa-1x"
          />
        ))}
    </CollapseMenuItemContainer>
  );
};
