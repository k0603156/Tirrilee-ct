import React from "react";
import styled from "styled-components";
import { getDate } from "date-fns";

function Header({
  className,
  state: {
    selected_data: { selected_dates },
    space_list,
    selected_data: { space_id },
  },
}) {
  const totalDates = selected_dates.length;
  const spaceName = space_list.filter((space) => space.id === space_id)[0]
    .title;

  const listedDates = selected_dates
    .map((date) => getDate(new Date(date)))
    .join(", ");

  return (
    <div className={className}>
      <div className="content">
        <h4>총 {totalDates}일</h4>
        <p>{spaceName}</p>
        <p>{listedDates}일</p>
      </div>
      <div className="imageBox" />
    </div>
  );
}
export default styled(Header)`
  position: fixed;
  top: 0;
  height: 135px;
  width: 100%;
  padding: 36px 12px 16px 12px;
  display: flex;
  box-sizing: border-box;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.05);
  background: #fff;
  border-bottom: solid 1px #f5f5f5;
  div.content {
    flex: 1;
    h4 {
      font-size: 24px;
      font-family: "NotoSansCJKkr-Bold";
      color: #000000;
    }
    p {
      font-size: 12px;
      line-height: 1.67;
      font-family: "NotoSansCJKkr-Regular";
      color: #707070;
      &:first-of-type {
        margin-top: 16px;
      }
    }
  }

  div.imageBox {
    width: 60px;
    height: 60px;
    background-image: url("../imgs/accommodation_img1.jpg");
  }
`;
