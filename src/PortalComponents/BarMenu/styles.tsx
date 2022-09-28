import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BarMenuContainer = styled.div`
  position: relative;
`;

export const BarMenuBody = styled.div`
  position: absolute;
  width: 248px;
  top: 30px;
  left: -200px;
  background: ${({ theme }) => theme.components.header.background};
  padding: 30px 20px;
  z-index: 1000;
  box-shadow: 0px 0.5px 5px rgba(0, 0, 0, 0.25);

  a {
    text-decoration: none;
  }

  div {
    color: ${({ theme }) => theme.components.text.basic.menu.color};
    line-height: ${({ theme }) =>
      `${theme.components.text.basic.lineHeight}rem`};
    letter-spacing: ${({ theme }) =>
      `${theme.components.text.basic.letterSpacing}px`};
    font-family: ${({ theme }) =>
      theme.components.text.basic.font}; // "Lato", sans-serif;
    font-weight: ${({ theme }) => theme.components.text.basic.fontWeight};
    font-size: ${({ theme }) => `${theme.fontSize.small}rem`};
    font-style: ${({ theme }) => theme.components.text.basic.fontStyle};

    opacity: 0.7;
    margin: 20px 10px;
  }
`;

export const HamberguerFontAwesomeIcon: any = styled(FontAwesomeIcon)`
  /*  */
  @media ${({ theme }) => theme.devices.gttv} {
    line-height: ${({ theme }) => `${theme.lineHeight.ml}rem`};
    font-size: ${({ theme }) => `${theme.fontSize.ml}rem`};
  }
`;
