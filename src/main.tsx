import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import ObserverProvider from "@/components/observerProvider.tsx";
import router from "@/router.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ObserverProvider>
      <RouterProvider router={router} />
    </ObserverProvider>
  </StrictMode>,
);
