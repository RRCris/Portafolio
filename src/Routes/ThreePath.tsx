import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Welcome from "./Page/Welcome";

export default function ThreePath() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}
