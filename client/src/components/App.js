import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "../components/protectedRoute";
import { UserContext } from "../contexts/UserContext";
import HeaderBar from "./headerBar";
import Login from "./login";
import Register from "./register";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser({ name: "Ante" });
  }, []);

  return user ? (
    <UserContext.Provider value={[user, setUser]}>
      <HeaderBar />
      <Container>
        <Switch>
          <Route path="/login" component={Login} exact></Route>
          <Route path="/register" component={Register} exact></Route>
        </Switch>
      </Container>
    </UserContext.Provider>
  ) : (
    <div />
  );
}
