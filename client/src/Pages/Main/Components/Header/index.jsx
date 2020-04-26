import React from "react";
import Bell from "../../../../Assets/ico/BellIcon";
import styled from "styled-components";

function Badge({ visible = true, count }) {
  return <span className={"badge"}>{count}</span>;
}
function Header(props) {
  return (
    <div className={props.className}>
      <span>달력</span>
      <span className={"alertIcon"}>
        <Bell />
        <Badge count={1} />
      </span>
    </div>
  );
}
export default styled(Header)`
  position: sticky;
  top: 0;
  height: 68px;
  width: 100%;
  padding: 20px 12px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background: #fff;
  font-size: 24px;
  font-family: "NotoSansCJKkr-Bold";
  border-bottom: 1px solid #f5f5f5;
  ${({ visible }) => (visible ? `` : `height: 0px; padding:0 12px;`)};
  transition-duration: 0.3s;
  span.alertIcon {
    position: relative;
    span.badge {
      position: absolute;
      top: 2px;
      right: 2px;
      width: 14px;
      height: 14px;
      line-height: 14px;
      border-radius: 50%;
      background-color: #ff6565;
      font-family: "NotoSansCJKkr";
      font-size: 11px;
      font-weight: bold;
      text-align: center;
      color: #ffffff;
    }
  }
`;
