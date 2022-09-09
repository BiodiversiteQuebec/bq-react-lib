import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import styled from "styled-components";

export default function BQDrawerMenu(props: any) {
  const {
    setBQDrawerMenuSelected,
    BQDrawerMenuSelected,
    BQDrawerMenuOptions,
    BQDrawerMenuLabel,
  } = props;
  const handleChange = (event: SelectChangeEvent) => {
    setBQDrawerMenuSelected(event.target.value);
  };

  const Items = BQDrawerMenuOptions.map((opt: any) => (
    <MenuItem value={opt.value}>{opt.label}</MenuItem>
  ));

  const BQSelect = styled(InputBase)`
    background: #ececec;
    padding: 5px 18px;
    width: 60%;
    margin: auto;
    border-radius: 5px;
    & .MuiInputBase-input {
      border-radius: 4;
      color: "black";
      position: "relative";
      padding: "10px 26px 10px 22px";
      font-size: 0.8em;
      font-family: "Lato";
    }
  `;

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <Select
        labelId="select-small"
        id="select-small"
        value={BQDrawerMenuSelected}
        onChange={handleChange}
        input={<BQSelect />}
      >
        {Items}
      </Select>
    </FormControl>
  );
}
