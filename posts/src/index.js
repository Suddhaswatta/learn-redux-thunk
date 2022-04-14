import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import CustomThemeProvider from "./context/themeContext";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <CustomThemeProvider>
    <App />
  </CustomThemeProvider>
);
