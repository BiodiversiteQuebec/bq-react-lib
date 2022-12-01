import styled from 'styled-components';

export const LogoImage = styled.img`
  width: 185px;
  object-fit: cover;
  margin-top: 5px;

  @media ${({ theme }) => theme.devices.gttv} {
    width: 300px;
    object-fit: cover;
    max-height: 95px;
  }
`;

export const LogoDiv = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
`;
