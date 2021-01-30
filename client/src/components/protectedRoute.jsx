import { useContext } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const user = useContext(UserContext)[0];
  const location = useLocation();

  const handleRedirect = () => {
    if (!user.isAuthenticated) return <Redirect to="/login" />;
    if (rest.type) {
      if (user.type !== rest.type || window.location.pathname === "/") {
        if (user.type === "user") return <Redirect to="/restaurants" />;
        if (user.type === "restaurant") return <Redirect to="/orders" />;
      }
    }

    return (
      <Route {...rest}>
        <Component />
      </Route>
    );
  };

  return <div>{handleRedirect()}</div>;
}
