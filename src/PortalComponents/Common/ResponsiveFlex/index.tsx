import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ResponsiveContainer } from "./styles";
import _ from "underscore";

export const ResposiveFlex = (props: any) => {
  const { children } = props;
  return (
    <ResponsiveContainer style={{ background: "yellow" }}>
      {children}
    </ResponsiveContainer>
  );
};
