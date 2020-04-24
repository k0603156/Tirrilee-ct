import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import GlobalStyles from "../Styles/Global";
import Calendar from "../Components/Calendar";
import Header from "../Components/Header";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header />
      <Calendar month={new Date("2020-03")} />
      <Calendar month={new Date("2020-02")} />
      <Calendar month={new Date("2020-01")} />
    </ThemeProvider>
  );
}
