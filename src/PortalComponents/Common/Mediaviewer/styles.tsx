import styled from "styled-components";

export const ViewerContainer = styled.div`
  position: relative;
  width: 500px;
  height: 350px;
  background: rgba(0, 0, 0, 0.58);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > .viewer-play {
    position: relative;
    width: 80px;
    height: 80px;
    background: #999999;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media ${({ theme }) => theme.devices.tablet} {
    width: 100%;
    height: 300px;
  }
`;
