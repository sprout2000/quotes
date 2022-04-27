import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./components/App";
import { setLocales } from "./setLocales";

import "./index.scss";

const locale =
  (window.navigator.languages && window.navigator.languages[0]) ||
  window.navigator.language;

setLocales(locale);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
