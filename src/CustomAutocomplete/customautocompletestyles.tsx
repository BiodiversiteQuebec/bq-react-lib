import styled from "styled-components";
import { Autocomplete, TextField } from "@mui/material";

export const CTextField = styled(TextField)`
  & .MuiOutlinedInput-input {
    padding: 10px 14px;
  }
  & legend {
    display: none;
  }
`;

const CAutocomplete = styled(Autocomplete)`
  & .MuiInputBase-input {
    height: 0.8rem;
  }
  & .MuiInputLabel-root {
    font-size: 0.85rem;
  }
`;
