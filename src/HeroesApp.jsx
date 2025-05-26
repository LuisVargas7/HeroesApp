import { AuthProvider } from "./auth";
import { HeroesRoutes } from "./heroes/routes/HeroesRoutes";
import { AppRouter } from "./router/AppRouter";

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
