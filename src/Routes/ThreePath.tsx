import { createBrowserRouter, Navigate, useNavigate } from "react-router-dom";

import NotFound from "./DefaultPage/NotFound";
import PageError from "./DefaultPage/PageError";

import BuildingPage from "./Page/BuildPage";
import Capacities from "./Page/Capacities";
import Habilities from "./Page/Habilities";
import Welcome from "./Page/Welcome";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <PageError />,
    children: [
      { path: "", element: <Welcome /> },
      { path: "habilities", element: <Habilities /> },
      { path: "capacities", element: <Capacities /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
  { path: "/404", element: <NotFound /> },
]);
