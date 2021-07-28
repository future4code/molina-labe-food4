import React from "react";
import theme from "./constants/theme";
import Router from "./routes/Router";
import GlobalState from "./Global/GlobalState";
import { ThemeProvider } from "@material-ui/core/styles";
import GlobalState from "./Global/GlobalState"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
