import React, { useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Theme, Global as GlobalStyles } from "../Styles";
import appReducer, { initialUserState } from "./AppReducer";
import { Main, Modify } from "../Pages";
import { ErrorBoundary } from "../HOC";

export default function App() {
  const [state, dispatchState] = useReducer(appReducer, initialUserState);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={"/"}
            render={() => <Main state={state} dispatchState={dispatchState} />}
          />
          );
          <Route
            path={"/modify"}
            render={() => (
              <ErrorBoundary
                state={state}
                dispatchState={dispatchState}
                children={Modify}
              />
            )}
          />
          );
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
