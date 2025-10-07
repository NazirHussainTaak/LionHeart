// import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";
// import "./i18n/config";

// createRoot(document.getElementById("root")!).render(<App />);

// src/main.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import "./i18n/config";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/LionHeart/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
