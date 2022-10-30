import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const BASE_URL = process.env.REACT_APP_BASE_NAME;

root.render(
  <BrowserRouter basename={process.env.REACT_APP_BASE_NAME}>
    <App />
  </BrowserRouter>
);

reportWebVitals();
