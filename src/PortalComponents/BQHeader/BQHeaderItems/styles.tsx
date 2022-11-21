import styled from 'styled-components';

export const BQHeaderUl = styled.ul`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 3.5em;
  z-index: 10;
  padding: 0;
  height: 100%;

  @media ${({ theme }) => theme.devices.tabletM} {
    display: none;
  }

  & li.active {
    //console border-bottom: 3px solid
    border-bottom: 4px solid #efb850;
    :hover {
    }
  }
`;

export const BQHeaderUlDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
