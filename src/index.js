import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Donate from "./Donate";
import About from "./About";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/demo2/" element={<App />} />
        <Route path="/donate/" element={<Donate />} />
        <Route path="/memorial/" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
