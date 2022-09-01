import { Container } from "react-bootstrap";
import styled from "styled-components";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export const TabBody = styled(Container)`
  width: 400px;
  height: 200px;
`;

export const CustomTabs = styled(Tabs)`
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  line-height: ${({ theme }) => `${theme.lineHeight.basic}px`};
`;
export const CustomTab = styled(Tab)``;

export const TabContentHidden = styled(Tab)`
  .tab-content {
    display: none;
  }
`;

export const CustomTabsWrapper = styled.div<Props>`
  position: absolute;
  left: ${({ left }) => (left ? `${left}px` : "159px")};
  top: ${({ top }) => (top ? `${top + 8}px` : "8px")};

  .nav-link.active {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: none;
    color: ${({ theme }) => theme.colors.white};
    background: transparent;
  }

  .nav-tabs .nav-link:hover {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: none;
  }

  .nav-tabs .nav-link {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: none;
  }

  .nav-tabs {
    border: none;
  }

  .nav-item {
    padding: 0 15px;
  }

  .tab-content {
    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.58);
    width: ${({ tabcontentWidth }) => `${tabcontentWidth}px`};
    position: absolute;
    left: ${({ left }) => (left ? `-${left}px` : "-159px")};
    top: ${({ top }) => (top ? `${top + 49}px` : "5px")};
    z-index: 9;
    box-sizing: content-box;
    overflow-x: hidden;

    .tab-pane.active {
      padding: 0px 0px;
    }
  }
`;

export const NonTabMenuItem = styled.div<Props>`
  position: absolute;
  cursor: pointer;
`;

/**
 *
 */
interface Props {
  /**
   *
   */
  onClick?: (e: any) => void;

  left?: number;
  top?: number;
  tabcontentWidth?: number;
}
