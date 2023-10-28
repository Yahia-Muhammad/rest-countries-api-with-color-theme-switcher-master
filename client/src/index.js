import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./config/Theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./theme.css";
import "./icons.css";

import Home from "./pages/home/Home";
import Country from "./pages/country/Country";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/country/:countryName",
    element: <Country />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
