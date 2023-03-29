import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";

const ImageFlag = styled.img`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export default function Flag({ flag, xl }) {
  return (
    <Box
      maxWidth={xl ? 550 : 300}
      height={xl ? 400 : 180}
      display="flex"
      borderBottom="1px solid #caced8"
      mr={xl ? 13 : 0}
      width="100%"
    >
      <ImageFlag src={flag} />
    </Box>
  );
}
