import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ObserverProvider from "@/observerProvider.tsx";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ObserverProvider>
      <App />
    </ObserverProvider>
  </StrictMode>,
);
