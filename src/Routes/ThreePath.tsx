import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Welcome from "./Page/Welcome";

export default function ThreePath() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<App />} />
        <Route path="welcome" element={<Welcome />} />
      </Route>
    </Routes>
  );
}
