import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const HeaderContainer: any = styled.div`
  display: flex;
  position: relative;
  justify-content: left center;
  align-items: center;
  background: ${({ theme }) => theme.components.header.background};
  box-shadow: 0px 0.5px 5px rgba(0, 0, 0, 0.25);
  padding-right: 0px;
  padding-left: 0px;
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.components.header.fontColor};
  height: 77px;
  width: 100%;
`;

export const Menu: any = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
`;
export const MenuBottom: any = styled.div`
  width: 100%;
  height: 10%;
  background: rgba(53, 53, 53, 0.85);
`;
export const LogoContainer: any = styled(Container)`
  width: 138px;
  height: 94px;
  position: absolute;
  left: -20px;
  top: -5px;

  &:hover {
    cursor: pointer;
  }
`;

export const Logo: any = styled.img`
  opacity: 0.8;
  width: 160px;
`;

export const MenuTitleContainer: any = styled.div`
  display: flex;
  width: fit-content;
  height: 100%;
  margin-left: 31px;
  align-items: center;
  gap: 1em;
`;

export const RightSideMenuContainer = styled.div`
  position: absolute;

  height: 70px;
  right: 40px;
  background: red;

  .right-side-pane {
    display: flex;
    position: relative;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 1em;
    background: red;

    @media ${({ theme }) => theme.devices.mobileL} {
      & .right-side-item {
        display: none;
      }
    }
  }
`;
