import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home.tsx";
import Layout from "@/components/layout.tsx";
import NotFound from "@/pages/errors/404.tsx";
import ServiceUnavailable from "@/pages/errors/503.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      {
        path: "about",
        Component: ServiceUnavailable,
      },
      {
        path: "projects",
        Component: ServiceUnavailable,
      },
      {
        path: "api",
        Component: ServiceUnavailable,
      },
      {
        path: "contact",
        Component: ServiceUnavailable,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
