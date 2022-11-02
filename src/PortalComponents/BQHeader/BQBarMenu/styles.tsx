import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const BarMenuContainer = styled.div`
  position: relative;
  & .hamberguer-button {
    &:hover {
      cursor: pointer;
    }
  }

  & .bar-menu-hide {
    @media ${({ theme }) => theme.devices.tabletgtM} {
      display: none;
    }
  }
`;

export const BarMenuBody = styled.div`
  position: absolute;
  width: 248px;
  top: 30px;
  left: -200px;
  background: ${({ theme }) => theme.components.header.background};
  padding: 30px 20px;
  z-index: 1000;

  a {
    text-decoration: none;
  }

  .language-item {
    cursor: pointer;
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

    @media ${({ theme }) => theme.devices.gttv} {
      padding-top: 4.5px;
      line-height: ${({ theme }) => `${theme.lineHeight.medium + 0.3}rem`};
      font-size: ${({ theme }) => `${theme.fontSize.medium + 0.3}rem`};
    }
  }

  /*  */
  @media ${({ theme }) => theme.devices.gttv} {
    top: 70px;
    width: 300px;
    left: -250px;
    line-height: ${({ theme }) => `${theme.lineHeight.medium}rem`};
    font-size: ${({ theme }) => `${theme.fontSize.medium}rem`};
  }
`;

export const HamberguerFontAwesomeIcon: any = styled(FontAwesomeIcon)`
  /*  */
  @media ${({ theme }) => theme.devices.gttv} {
    line-height: ${({ theme }) => `${theme.lineHeight.ml}rem`};
    font-size: ${({ theme }) => `${theme.fontSize.ml}rem`};
  }
`;
