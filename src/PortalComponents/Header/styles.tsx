import styled from "styled-components";

export const HeaderContainerV1 = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 100%;
  //box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
  background: ${({ theme }) => theme.components.header.background};
  color: ${({ theme }) => theme.components.text.menu.color};
  padding: 0.25rem 1rem;

  & ul {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 3em;
    z-index: 10;

    @media ${({ theme }) => theme.devices.tabletM} {
      display: none;
    }
  }

  & li.active {
    border-bottom: 3px solid ${({ theme }) => theme.components.text.menu.color};
  }

  & a {
    text-decoration: none;
    color: inherit;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0.25rem;
  }

  & .home-icon {
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }

  & .tab_content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    left: 0;
    background-color: rgba(9, 9, 9, 0.23);
  }

  & .right-side {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    height: 90%;
  }
`;
