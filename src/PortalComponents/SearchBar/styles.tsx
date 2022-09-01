import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  position: relative;
`;

export const SearchBarIcon = styled.div`
  display: flex;
  height: 1.5rem;
  width: 1.5rem;
  padding: 4px;
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
`;

export const SearchBarInput = styled.input`
  width: 400px;
  height: 2rem;
  box-sizing: border-box;
  padding-left: 3em;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  border: none;
  &:focus {
    border: none;
    outline: none !important;
    border-color: #719ece;
    box-shadow: 0 0 10px #719ece;
  }
`;
