import React from "react";
import ReactDOM from "react-dom/client";

//styles
import "./GlobalStyles.css";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/ThreePath";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
