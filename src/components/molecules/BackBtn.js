import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@mui/material";

const Button = styled.button`
  align-items: center;
  background: ${(props) => (props.darkMode ? "#2B3743" : "#fff")};
  color: ${(props) => props.darkMode && "#fff"};
  border-radius: 6px;
  border: 0;
  display: flex;
  font-size: 14px;
  justify-content: center;
  padding-bottom: 12px;
  padding-top: 12px;
  width: 140px;
  box-shadow: 1px 1px 9px 2px rgba(0, 0, 0, 0.37);
  -webkit-box-shadow: 1px 1px 9px 2px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: 1px 1px 9px 2px rgba(0, 0, 0, 0.37);
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export default function BackBtn({ handleClick, darkMode }) {
  return (
    <Box mt={5} mb={10} display="flex">
      <Button onClick={handleClick} darkMode={darkMode}>
        <ArrowBackIcon />
        <Typography ml={1}>Back</Typography>
      </Button>
    </Box>
  );
}
