import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@zackyy1/vun-ui/dist/cjs/index.css";
import Landing from "./pages/Landing/Landing";
import Header from "components/Header/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <div>404</div>,
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Header></Header> */}
    <RouterProvider router={router} />
    {/* <footer>footer</footer> */}
  </React.StrictMode>
);
