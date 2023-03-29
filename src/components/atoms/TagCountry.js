import React from "react";
import styled from "styled-components";

const Tag = styled.div`
  background: ${(props) => (props.darkMode ? "#2B3743" : "#fff")};
  border-radius: 4px;
  border: 0;
  font-size: 14px;
  justify-content: center;
  margin: 8px;
  opacity: ${(props) => !props.darkMode && 0.6};
  padding: 6px;
  text-align: center;
  box-shadow: 1px 1px 9px 2px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 1px 1px 9px 2px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 1px 1px 9px 2px rgba(0, 0, 0, 0.2);
`;
export default function TagCountry({ country, darkMode }) {
  return <Tag darkMode={darkMode}>{country}</Tag>;
}
