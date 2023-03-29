import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";

export default function Flag({ flag }) {
  const ImageFlag = styled.img`
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;

  return (
    <Box
      maxWidth={300}
      height={180}
      display="flex"
      borderBottom="1px solid #caced8"
    >
      <ImageFlag src={flag} />
    </Box>
  );
}
