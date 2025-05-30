import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { HeroesApp } from "./HeroesApp.jsx";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter.jsx";
import { determinateBackground } from "./heroes/helpers/";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HeroesApp {...determinateBackground()} />
  </BrowserRouter>
);
