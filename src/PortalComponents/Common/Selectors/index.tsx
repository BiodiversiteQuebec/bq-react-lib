import React from "react";
import { Form } from "react-bootstrap";
import { CustomSelector } from "./styles";

export const Selector = () => {
  return (
    <CustomSelector size="sm" defaultValue={"themes"}>
      <option value="themes" disabled>
        themes
      </option>
      <option value="option1">option 1</option>
      <option value="option2">option 2</option>
      <option value="option2">option 3</option>
    </CustomSelector>
  );
};
