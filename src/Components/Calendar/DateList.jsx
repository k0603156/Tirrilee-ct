import React from "react";
import styled from "styled-components";
import { isToday } from "date-fns";

function DateList(props) {
  const selectedDates = props.selectedDates;
  const onClickDate = props.onClickDate;
  const { startDayOfMonth, endOfMonth } = props.setupData;
  return (
    <div className={props.className}>
      {[...Array(startDayOfMonth).keys()].map((i, index) => (
        <div className="item prev" key={"prev" + i + 1}></div>
      ))}
      {[...Array(endOfMonth).keys()].map((i, index) => {
        const date = i + 1;
        const selected = selectedDates.includes(date) ? "selected" : "";
        return (
          <div className={`item ${selected}`} key={date}>
            <span data-date={date} onClick={onClickDate}>
              {date}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default styled(DateList)`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  div.item {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: calc(100% / 7);
    span {
      height: 40px;
      width: 40px;
      line-height: 40px;
      text-align: center;
      user-select: none;
      cursor: pointer;
    }
    &.prev,
    &.next {
      color: #c6c6c6;
    }
  }
  div.item.selected span {
    color: #fff;
    background: #006cb3;
    border-radius: 50%;
  }
`;
