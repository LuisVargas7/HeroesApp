import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";
import { types } from "../../types/types";

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authstate, dispatch] = useReducer(AuthReducer, {}, init);

  /*  const determinateBackground = () => {
    return process.env.NODE_ENV === "development" ? (
      <body style={{ fontSize: "50px" }}> </body>
    ) : (
      "production"
    );
  }; */

  const user = {
    id: 123,
    name,
  };

  const login = (user) => {
    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");
    const action = {
      type: types.logout,
    };

    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...authstate, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
