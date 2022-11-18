import styled from 'styled-components';

export const LogoImage = styled.img`
  width: 185px;
  object-fit: cover;
  max-height: 75px;
  margin-right: 40px;
  margin-top: 5px;

  @media ${({ theme }) => theme.devices.gttv} {
    width: 300px;
    object-fit: cover;
    max-height: 95px;
  }
`;
