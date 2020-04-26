import React from "react";
import styled from "styled-components";
import {
  format,
  startOfMonth,
  endOfMonth,
  getDay,
  isThisMonth,
} from "date-fns";
import WeekList from "./WeekList";
import DateList from "./DateList";

function Calendar({
  className,
  month,
  disabled_dates,
  selected_dates,
  setSelectedDates,
  onClick,
}) {
  const setupData = {
    month,
    today: isThisMonth(month) ? new Date().getDate() : null,
    startOfMonth: startOfMonth(month).getDate(),
    endOfMonth: endOfMonth(month).getDate(),
    startDayOfMonth: getDay(startOfMonth(month)),
  };

  return (
    <div className={className} onClick={onClick}>
      <div className="head">
        <span className="title">{format(month, "yyyy년 MM월")}</span>
      </div>
      <div className="body">
        <WeekList className="weekList" />
        <DateList
          className="dateList"
          setupData={setupData}
          disabled_dates={disabled_dates}
          selected_dates={selected_dates}
          onClickDate={setSelectedDates}
        />
      </div>
    </div>
  );
}

export default styled(Calendar)`
  display: flex;
  flex-direction: column;
  padding: 14px;
  min-height: 354px;
  background-color: #fff;
  border-bottom: 1px solid #f5f5f5;
  div.head {
    font-size: 20px;
    line-height: 29px;
    color: #006cb3;
  }
  div.body {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;
