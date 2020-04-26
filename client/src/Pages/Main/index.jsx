import React from "react";
import Calendar from "./Components/Calendar";
import Header from "./Components/Header";
import Popup from "./Components/Popup";

export default function Main({ state, dispatchState }) {
  const { disabled_dates, selected_data, month_array } = state;
  const { selected_dates } = selected_data;

  const setSelectedDates = (event) =>
    dispatchState({
      type: "SET_SELECTED_DATE",
      payload: event.currentTarget.dataset.date,
    });

  return (
    <div>
      <Header visible={!Boolean(selected_dates.length)} />
      {month_array.map((month) => (
        <Calendar
          key={month.toString()}
          month={month}
          disabled_dates={disabled_dates}
          selected_dates={selected_dates}
          setSelectedDates={setSelectedDates}
        />
      ))}
      <Popup
        visible={Boolean(selected_dates.length)}
        state={state}
        dispatchState={dispatchState}
      />
    </div>
  );
}
