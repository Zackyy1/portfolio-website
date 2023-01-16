import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "@zackyy1/vun-ui/dist/cjs/index.css";
import "./index.css";
import "./styles/_general.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Portfolio = lazy(() => import("pages/Portfolio/Portfolio"));
const Landing = lazy(() => import("./pages/Landing/Landing"));
const Contact = lazy(() => import("pages/Contact/Contact"));

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
console.log(
  "%cYou naughty, \nLooking for something?\nWell, feel free, you can also find source code here: ",
  "color: red; font-size: 30px; font-weight: bold; text-shadow: 0 0 10px red;"
);
console.log(
  "%chttps://github.com/Zackyy1/portfolio-website",
  "font-size: 20px; text-shadow: 0 0 10px red;"
);
console.log(
  "%cBut thanks for taking interest anyway!\n\n- Martin",
  "color: red; font-size: 30px; font-weight: bold; text-shadow: 0 0 10px red;"
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
