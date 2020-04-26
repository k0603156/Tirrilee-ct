import React from "react";
import styled from "styled-components";
import { format, setDate } from "date-fns";

function formatDate(month, date) {
  return format(setDate(month, date), "MM/dd/yyyy");
}
function DateList({
  className,
  setupData,
  disabled_dates,
  selected_dates,
  onClickDate,
}) {
  const { month, today, startDayOfMonth, endOfMonth } = setupData;
  return (
    <div className={className}>
      {[...Array(startDayOfMonth).keys()].map((i, index) => (
        <div className="item prev" key={"prev" + i + 1}></div>
      ))}
      {[...Array(endOfMonth).keys()].map((i, index) => {
        const date = i + 1;
        const isDisabled = disabled_dates.includes(formatDate(month, date))
          ? "disabled"
          : "";
        const selected = selected_dates.includes(formatDate(month, date))
          ? "selected"
          : "";
        const isToday = date === today ? "today" : "";
        return (
          <div
            className={`item ${selected} ${isToday} ${isDisabled}`}
            key={date}
          >
            <span
              data-date={formatDate(month, date)}
              onClick={!isDisabled ? onClickDate : null}
            >
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
  div.item.disabled span {
    text-decoration: line-through;
    color: #c6c6c6;
    cursor: auto;
  }
  div.item.today span {
    border: 1px solid #006cb3;
    border-radius: 50%;
    box-sizing: border-box;
  }
`;
