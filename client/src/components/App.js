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
import Orders from "./orders";
import { getLoggedInUser } from "../services/authService";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(async () => {
    const user = await getLoggedInUser();

    setUser(user);
  }, []);

  return user ? (
    <UserContext.Provider value={[user, setUser]}>
      <HeaderBar />
      <Container>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/restaurant/:restaurantId" component={Meals} exact />
          <Route path="/checkout" component={Checkout} exact />
          <Route path="/orders" component={Orders} exact />

          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
        </Switch>
      </Container>
    </UserContext.Provider>
  ) : (
    <div />
  );
}
