import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { CustomPathLink } from '../CustomPathLink';

export const buttonColors = {
  article: '#7A93B5',
  data: '#7AB5B0',
  balado: '#E0B658',
  tool: '#E08558',
};

export const OutlinedSubPathLink = styled(CustomPathLink)`
  font-weight: bold;
  font-size: 10px;
  letter-spacing: 0.0125em;
  color: ${({ theme }) => theme.components.text.basic.color};
  border: 2px solid ${({ theme }) => theme.components.text.basic.color};
  border-radius: 3px;
  background-color: transparent;
  opacity: 1;
  text-decoration: none;
  padding: 10px 45px;

  & span {
    font-weight: 700;
    font-family: 'Roboto';
  }

  :hover {
    text-decoration: none;
    background-color: transparent;
    opacity: 0.7;
  }
`;

export const WhiteOutlinedSubPathLink = styled(OutlinedSubPathLink)`
  color: ${({ theme }) => theme.components.text.basic.menu.color};
  border: 2px solid ${({ theme }) => theme.components.text.basic.menu.color};
  max-width: 270px;
  text-align: center;
`;

export const FilledButton = styled(Button)`
  font-weight: bold;
  font-size: 14px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.basic};
  padding: 0px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  min-width: 100px;
  min-height: 26px;
  border-radius: 8px;
  border: none;
  background-color: ${({ color }) => color ?? 'black'};

  :hover {
    text-decoration: none;
    cursor: pointer;
  }
  .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  .btn-link:focus,
  .btn-link.focus {
    text-decoration: none;
  }

  .btn:focus,
  .btn.focus {
    outline: none;
    cursor: pointer;
    box-shadow: none;
  }

  :focus:not(:focus-visible) {
    outline: 0;
    box-shadow: none;
  }

  :focus,
  .focus-visible:focus:not(:focus-visible) {
    outline: 0;
    box-shadow: none;
    cursor: pointer;
    background-color: ${({ color }) => color ?? 'black'};
  }

  :focus {
    background: ${({ color }) => color ?? 'black'};
  }
`;

export const ButtonSubmit = styled(Button)`
  font-weight: bold;
  font-size: 14px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.basic};

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 10.55px;
  min-height: 21px;
  border-radius: 3px;
  border: none;
  background-color: ${({ color }) => color ?? 'black'};
  opacity: 0.3;
  color: white;

  :hover {
    text-decoration: none;
    cursor: pointer;
  }
  .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  .btn-link:focus,
  .btn-link.focus {
    text-decoration: none;
  }

  .btn:focus,
  .btn.focus {
    outline: none;
    cursor: pointer;
    box-shadow: none;
  }

  :focus:not(:focus-visible) {
    outline: 0;
    box-shadow: none;
  }

  :focus,
  .focus-visible:focus:not(:focus-visible) {
    outline: 0;
    box-shadow: none;
    cursor: pointer;
    background-color: ${({ color }) => color ?? 'black'};
  }

  :focus {
    background: ${({ color }) => color ?? 'black'};
  }
`;
