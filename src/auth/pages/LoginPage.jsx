import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const lastPath = localStorage.getItem("lastPath") || "/";

  const onLogin = () => {
    login({
      id: 123,
      name: "User",
    });
    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="title-h1"> Welcome HeroesApp! </h1>
      <hr />

      <button className="btn btn-info button-signIn" onClick={onLogin}>
        Sign in
      </button>
    </div>
  );
};
