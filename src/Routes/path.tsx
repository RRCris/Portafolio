import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PageError from "./DefaultPage/PageError";
import Capacities from "./Page/Capacities";
import Experiencies from "./Page/Experiencies";
import Habilities from "./Page/Habilities";
import Welcome from "./Page/Welcome";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <PageError />,
    children: [
      { path: "welcome", element: <Welcome /> },
      { path: "habilities", element: <Habilities /> },
      { path: "experiencies", element: <Experiencies /> },
      { path: "capacities", element: <Capacities /> },
    ],
  },
]);
