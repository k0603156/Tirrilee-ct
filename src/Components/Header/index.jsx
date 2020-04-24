import React from "react";
import { FiBell } from "react-icons/fi";
import styled from "styled-components";

function Header(props) {
  return (
    <div className={props.className}>
      <span>달력</span>
      <span>
        <FiBell />
      </span>
    </div>
  );
}
export default styled(Header)`
  position: fixed;
  height: 68px;
  width: 100%;
  padding: 20px 12px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background: #fff;
  font-size: 24px;
  font-family: "NotoSansCJKkr-Bold";
`;
