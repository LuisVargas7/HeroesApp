import { Navigate, Route, Routes } from "react-router-dom";
import { MarvelPage, DcPage } from "../heroes";
import { LoginPage } from "../auth";
import { Navbar } from "../ui";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        ></Route>

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};
