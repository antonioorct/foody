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
import ProtectedRoute from "./protectedRoute";
import UserProfile from "./userProfile";
import RestaurantProfile from "./restaurantProfile";
import RestaurantMeals from "./restaurantMeals";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(async () => {
    const user = await getLoggedInUser();

    setUser(user);
  }, []);

  return user ? (
    <UserContext.Provider value={[user, setUser]}>
      {user.isAuthenticated && <HeaderBar />}
      <Container style={{ marginTop: "105px" }}>
        <Switch>
          <ProtectedRoute type="redirect" path="/" exact />
          <ProtectedRoute
            type="user"
            path="/restaurants"
            component={Main}
            exact
          />
          <ProtectedRoute
            type="user"
            path="/restaurant/:restaurantId"
            component={Meals}
            exact
          />
          <ProtectedRoute
            type="user"
            path="/checkout"
            component={Checkout}
            exact
          />
          <ProtectedRoute
            type="restaurant"
            path="/meals"
            component={RestaurantMeals}
            exact
          />
          <ProtectedRoute path="/orders" component={Orders} exact />
          <ProtectedRoute
            path="/profile"
            component={user.type === "user" ? UserProfile : RestaurantProfile}
            exact
          />

          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
        </Switch>
      </Container>
    </UserContext.Provider>
  ) : (
    <div />
  );
}
