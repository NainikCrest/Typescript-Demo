import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider } from "./Store";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import FavPage from "./FavPage";

const root = document.getElementById("app-root");
ReactDOM.render(
  <Router>
    <StoreProvider>
      <App path="/">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faves" element={<FavPage />} />
        </Routes>
      </App>
    </StoreProvider>
  </Router>,
  root
);
