import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { Toaster } from "./components/ui/sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
      <Toaster
        position="top-right"
        richColors
        visibleToasts={3}
        duration={3000}
      />
    </BrowserRouter>
  </React.StrictMode>
);
