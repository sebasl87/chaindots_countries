import React from "react";
import styled from "styled-components";

const Tag = styled.div`
  width: 100%;
  min-width: 100px;
  font-size: 14px;
  border-radius: 4px;
  border: 0;
  padding-top: 6px;
  padding-bottom: 6px;
  justify-content: center;
  text-align: center;
  opacity: 0.6;
  box-shadow: 1px 1px 9px 2px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 1px 1px 9px 2px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 1px 1px 9px 2px rgba(0, 0, 0, 0.2);
  margin-left: 10px;
`;
export default function TagCountry({ country }) {
  return <Tag>{country}</Tag>;
}
