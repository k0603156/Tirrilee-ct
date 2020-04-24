import React, { useState } from "react";
import styled from "styled-components";
import { format, startOfMonth, endOfMonth, getDay } from "date-fns";
import WeekList from "./WeekList";
import DateList from "./DateList";

function Calendar(props) {
  const [selectedDates, setSelectedDates] = useState([]);
  const month = props.month;
  const setupData = {
    startOfMonth: startOfMonth(month).getDate(),
    endOfMonth: endOfMonth(month).getDate(),
    startDayOfMonth: getDay(startOfMonth(month)),
  };
  const onClickDate = (event) => {
    selectedDates.includes(Number(event.currentTarget.dataset.date))
      ? setSelectedDates([
          ...selectedDates.filter(
            (date) => date !== Number(event.currentTarget.dataset.date)
          ),
        ])
      : setSelectedDates([
          ...selectedDates,
          Number(event.currentTarget.dataset.date),
        ]);
  };
  return (
    <div className={props.className}>
      <div className="head">
        <span className="title">{format(props.month, "yyyy년 MM월")}</span>
      </div>
      <div className="body">
        <WeekList className="weekList" />
        <DateList
          className="dateList"
          month={props.month}
          setupData={setupData}
          selectedDates={selectedDates}
          onClickDate={onClickDate}
        />
      </div>
    </div>
  );
}

export default styled(Calendar)`
  display: flex;
  flex-direction: column;
  padding: 14px;
  padding-top: 68px;
  min-height: 354px;
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
