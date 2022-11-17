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
  font-weight: 600;

  /*  border-bottom: 1px solid
    ${({ theme, opacity }) =>
    opacity === 1 ? theme.components.text.menu.color : 'transparent'}; */
  color: ${({ theme, active }) => theme.components.text.menu.color};
  opacity: ${({ opacity }) => opacity};
  border-bottom: ${({ theme, active, color }) =>
    active
      ? '7px solid ' + color
      : '0px solid ' + theme.components.text.menu.color};
  margin-top: ${({ active }) => (active ? '6px' : '0px')};
  margin-bottom: ${({ active }) => (active ? '-12px' : '0px')};
  padding-bottom: ${({ active }) => (active ? '10px' : '0px')};
  cursor: 'pointer';
  :hover {
    border-bottom: ${({ color }) => ' 7px solid ' + color};
    margin-top: 6px;
    margin-bottom: -12px;
    padding-bottom: 10px;
    opacity: 1;
  }
`;
