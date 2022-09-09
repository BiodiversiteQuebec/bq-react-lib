import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

export default function BQPhotoCard(props: any) {
  const { photo, mainText, subText } = props;

  /*const [photo, setPhoto] = useState("");
  const [mainText, setMainText] = useState("");
  const [subText, setSubtext] = useState("");

  useEffect(() => {
    setPhoto(photo);
    setMainText(mainText);
    setSubtext(subText);
  }, [photo, mainText, subText]);
*/

  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        width: "220px",
        margin: "10px",
        background: "transparent",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardMedia
          sx={{
            width: 180,
            height: 180,
            textAlign: "center",
            borderRadius: 100,
            border: "0px",
          }}
          image={photo}
        />
        <CardContent
          sx={{ flex: "1 0 auto", width: 180, paddingBottom: "0px" }}
        >
          <Typography component="div" variant="subtitle1">
            {mainText}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            component="div"
            sx={{ fontSize: "0.9em" }}
          >
            {subText}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
