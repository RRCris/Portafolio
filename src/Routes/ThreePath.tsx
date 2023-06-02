import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  Router,
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
    <Route path="/">
      <Route index element={<Navigate to="/welcome" />} />
      <Route path="welcome" element={<Welcome />} />
      <Route path="services" element={<Layout />}>
        <Route path="capacities" element={<Capacities />} />
        <Route path="experience" element={<Experiencies />} />
        <Route path="habilities" element={<Habilities />} />
      </Route>
      <Route path="/404" element={<Layout />}>
        <Route index element={<NotFound />} />
      </Route>

      <Route path="*" element={<Navigate to="/404" />} />
    </Route>
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
