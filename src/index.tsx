import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/**
 * Entry point for the Wanted Poster React application.
 *
 * @description
 * This file initializes and renders the root `<App />` component inside the HTML element with the ID `"root"`.
 * It wraps the application in `<React.StrictMode>` to help identify potential problems in development.
 * Bootstrap's CSS and JS are also imported globally for styling and component support.
 *
 * Additionally, the `reportWebVitals` function is available for measuring performance
 * and can be configured to log results or send data to analytics endpoints.
 *
 * @see {@link App} The root component of the application.
 * @see {@link reportWebVitals} For measuring and logging web performance metrics.
 * @see {@link https://reactjs.org/docs/strict-mode.html} React Strict Mode documentation.
 * @see {@link https://bit.ly/CRA-vitals} Learn more about measuring performance with Create React App.
 */

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
