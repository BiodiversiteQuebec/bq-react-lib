import styled from 'styled-components';

export const HeaderV1Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 69.06px;
  padding: 5px 28px;
  gap: 38px;
  background: ${({ theme }) => theme.components.header.background};
  box-shadow: 0px 0.5px 5px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.components.header.fontColor};
  z-index: 10;
`;

export const LogoContainer = styled.div`
  width: 90px;
  height: 29.06px;
  flex: none;
  flex-grow: 0;
  order: 0;
  position: relative;

  & svg {
    position: absolute;
    top: -10px;
    left: 0;
  }

  & img {
    position: absolute;
    top: -28px;
    left: -15px;
    width: 155px;
    max-width: 185px;
    max-height: 100px;
    aspect-ratio: 16/9;
  }
`;

export const HeaderLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 38px;

  height: 27px;
  /* Inside auto layout */
  flex: none;

  @media ${({ theme }) => theme.devices.tabletM} {
    display: none;
  }
`;

export const HeaderBtContainer = styled.div`
  width: 27px;
  height: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Inside auto layout */

  flex: none;
  order: 4;
  flex-grow: 0;
`;

export const Logo = styled.img`
  position: absolute;
`;
