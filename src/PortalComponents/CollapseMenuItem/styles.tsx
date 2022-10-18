import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuText } from '../Text/textstyles';

export const CollapseMenuItemContainer: any = styled(Container)`
  display: flex;
  gap: 0.5em;
`;

export const CollapseMenuItemFontAwesomeIcon: any = styled(FontAwesomeIcon)`
  padding-top: 1.3px;
  color: ${({ theme }) => theme.components.text.menu.color};
  line-height: ${({ theme }) => `${theme.components.text.basic.lineHeight}rem`};
  letter-spacing: ${({ theme }) =>
    `${theme.components.text.basic.letterSpacing}px`};
  font-family: ${({ theme }) => theme.components.text.basic.font};
  font-weight: ${({ theme }) => theme.components.text.basic.fontWeight};
  font-size: ${({ theme }) => `${theme.fontSize.small}rem`};
  font-style: ${({ theme }) => theme.components.text.basic.fontStyle};
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;

export const CollapseMenuText = styled(MenuText)`
  border-bottom: 1px solid
    ${({ theme, active }) =>
      active === true ? theme.components.text.menu.color : 'transparent'};
  font-weight: 600;
`;
