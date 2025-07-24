import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home.tsx";
import Layout from "@/components/layout.tsx";
import NotFound from "@/pages/errors/404.tsx";
import ServiceUnavailable from "@/pages/errors/503.tsx";
import Projects from "@/pages/projects.tsx";
import AboutMe from "@/pages/aboutMe.tsx";
import Anone from "@/pages/anone.tsx";
import ContactPage from "@/pages/contact";

const router = createBrowserRouter([
  {
    path: "/anone",
    Component: Anone,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      {
        path: "about",
        Component: AboutMe,
      },
      {
        path: "projects",
        Component: Projects,
      },
      {
        path: "apiguide",
        Component: ServiceUnavailable,
      },
      {
        path: "contact",
        Component: ContactPage,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
