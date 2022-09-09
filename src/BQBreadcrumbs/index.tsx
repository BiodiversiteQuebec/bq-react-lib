import { HeightRounded } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";

export default function BQBreadcrumbs(props: any) {
  const { hier } = props.props;
  //const StyledLink = styled(Link);
  const [crumbs, setCrumbs] = useState([]);
  useEffect(() => {
    const bc = hier.map((h: any) => (
      <Link color="inherit" to={h.href}>
        {h.name}
      </Link>
    ));
    setCrumbs(bc);
  }, [hier]);
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link to="/">
        <HomeIcon sx={{ fontSize: "1em" }} />
      </Link>
      {crumbs}
    </Breadcrumbs>
  );
}
