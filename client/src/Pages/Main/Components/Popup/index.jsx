import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Item from "./Item";

function Popup({
  className,
  state: { space_list, selected_data },
  dispatchState,
}) {
  const onClick = (event) => {
    if (!selected_data.space_id) {
      event.preventDefault();
      alert("장소가 선택되지 않았습니다.");
    }
  };
  const onChange = (event) => {
    dispatchState({
      type: "SET_SELECTED_SPACE",
      payload: event.currentTarget.dataset.idx,
    });
  };
  const totalSelect = selected_data.selected_dates.length;
  const Items = space_list.map((space, index) => (
    <Item
      selected_data={selected_data}
      space={space}
      onChange={onChange}
      key={index}
    />
  ));
  return (
    <div className={className}>
      <div className={"list"}>{Items}</div>
      <div className={"footer"}>
        총 {totalSelect}일{" "}
        <Link to="/modify" onClick={onClick}>
          {" "}
          수정하기
        </Link>
      </div>
    </div>
  );
}
export default styled(Popup)`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  height: ${({ visible }) => (visible ? "256px" : "0px")};
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0 -3px 6px 0 rgba(0, 0, 0, 0.1);
  transition-duration: 0.3s;
  div.list {
    flex: 1;
    overflow-x: scroll;
  }
  div.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 12px;
    font-family: NotoSansCJKkr;
    font-size: 20px;
    line-height: 60px;
    font-weight: bold;
    a {
      width: 160px;
      height: 48px;
      line-height: 48px;
      background-color: #006cb3;
      color: #fff;
      border-radius: 4px;
      font-family: NotoSansCJKkr;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
    }
  }
`;
