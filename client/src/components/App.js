import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import HeaderBar from "./headerBar";
import Login from "./login";
import Main from "./main";
import Register from "./register";
import Meals from "./meals";
import Checkout from "./checkout";

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
          <Route path="/" component={Main} exact />
          <Route path="/restaurant/:restaurantId" component={Meals} exact />
          <Route path="/checkout" component={Checkout} exact />

          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
        </Switch>
      </Container>
    </UserContext.Provider>
  ) : (
    <div />
  );
}
