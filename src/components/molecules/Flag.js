import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";

const ImageFlag = styled.img`
  border-bottom-left-radius: ${(props) => props.xl && "6px"};
  border-bottom-right-radius: ${(props) => props.xl && "6px"};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;
export default function Flag({ flag, xl, isMobile }) {
  return (
    <Box
      maxWidth={xl ? 550 : 300}
      height={!isMobile && xl ? 400 : isMobile && xl ? "auto" : 180}
      display="flex"
      borderBottom={!xl && "1px solid #caced8"}
      mr={xl ? 13 : 0}
      width={isMobile ? "300px" : "100%"}
    >
      <ImageFlag src={flag} xl={xl} />
    </Box>
  );
}
