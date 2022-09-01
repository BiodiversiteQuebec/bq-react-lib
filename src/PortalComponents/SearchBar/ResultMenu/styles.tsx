import styled from "styled-components";

export const ResultMenuContainer = styled.div`
  position: absolute;
  width: 400px;
  background: ${({ theme }) => theme.components.header.background};
  padding: 1em;
  margin-top: 10px;
  z-index: 1000;
`;

export const ResultMenuSplitter = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.white};
  opacity: 0.7;
`;
