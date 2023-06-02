import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import NavBar from "../Components/NavBar";

import NotFound from "./DefaultPage/NotFound";
import PageError from "./DefaultPage/PageError";

import BuildingPage from "./Page/BuildPage";
import Capacities from "./Page/Capacities";
import Experiencies from "./Page/Experiencies";
import Habilities from "./Page/Habilities";
import Welcome from "./Page/Welcome";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      <Route path="/" element={<Welcome />}></Route>
    </Routes>
  )
);

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
