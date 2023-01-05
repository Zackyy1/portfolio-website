import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/_general.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@zackyy1/vun-ui/dist/cjs/index.css";
import Landing from "./pages/Landing/Landing";
import Portfolio from "pages/Portfolio/Portfolio";
import Contact from "pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <div>404</div>,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
    errorElement: <div>404</div>,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <div>404</div>,
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
