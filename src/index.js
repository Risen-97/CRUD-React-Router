import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContactProvider } from "./context/contact-auth";
ReactDOM.render(
  <React.StrictMode>
    <ContactProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
