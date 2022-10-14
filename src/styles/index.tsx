import styled from 'styled-components';

export const colors = {
  green: '#538887',
  darkgreen: '#2e483e',
  white: '#fff',
  mediumgray: '#9b9b9b',
  darkgray: '#424242',
  bqdarkgreen: '#2e483e',
  bqorange: '#e0b658',
  bqpalegray: '#afafaf',
  bqdarkorange: '#a6612d',
  bqcyan: '#7bb5b1',
  bqlightgray: '#afafaf',
  bqlightbeige: '#f1dca9',
  bqturquoise: '#7bb5b1',
  bqcream: '#f1dca9',
  bqtopaz: '#3e8986',
  bqlightorange: '#efb850',
  bqlightblue: '#81c8c5',
};

export const Container = styled.div`
  align-items: center;
  justify-content: center;
`;

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  position: relative;
  overflow: hidden;

  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

export const LeftContent = styled(Container)`
  align-items: center;
  height: 100%;
  left: 0;
  top: 0;
  padding: 0;
  background-color: transparent;
  position: absolute;
  width: 400px;
`;

export const RightContent = styled(LeftContent)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  & .leaflet-container {
    height: 100vh;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BottomNavBarContainer = styled(Container)`
  width: 100%;
  position: absolute;
  height: 50px;
  z-index: 999;
  bottom: 0;
  left: 0;
  display: none;

  @media (max-width: 768px) {
    display: inline;
  }
`;
