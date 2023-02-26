import React from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { CssBaseline } from "@mui/material";

const container = document.getElementById("root");
const root = createRoot(container);
const theme = createTheme({
  typography: {
    fontFamily: "Comfortaa",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1380,
    },
  },
  palette: {
    primary: {
      main: "#222222",
    },
    background: {
      default: "#222222",
    },
  },
});

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
