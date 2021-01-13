import React, { useContext } from "react";
import { loginRestaurant, loginUser } from "../services/authService";
import useForm from "../utils/useForm";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Feedback from "react-bootstrap/Feedback";
import Image from "react-bootstrap/Image";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function Login() {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();

  const doUserSubmit = async () => {
    const loggedInUser = await loginUser(userForm);
    setUser(loggedInUser);
    history.push("/");
  };
  const doRestaurantSubmit = async () => {
    const loggedInRestaurant = await loginRestaurant(restaurantForm);
    setUser(loggedInRestaurant);
    history.push("/");
  };

  const validation = {
    username: { required: true, minLength: 4 },
    password: { required: true },
  };
  const [userForm, userErrors, userHandleChange, userHandleSubmit] = useForm(
    doUserSubmit,
    validation
  );
  const [
    restaurantForm,
    restaurantErrors,
    restaurantHandleChange,
    restaurantHandleSubmit,
  ] = useForm(doRestaurantSubmit, validation);

  return (
    <div className="text-center">
      <Image style={{ height: "300px" }} src="img/logo.png"></Image>
      <div className="row">
        <div className="col-4">
          <h3>Korisnicka prijava</h3>
          <Form onSubmit={userHandleSubmit}>
            <FormControl
              name="username"
              value={userForm.username}
              onChange={userHandleChange}
              placeholder="Username"
              isInvalid={userErrors.username}
            />
            <Feedback type="invalid">{userErrors.username}</Feedback>

            <FormControl
              type="password"
              name="password"
              value={userForm.password}
              onChange={userHandleChange}
              placeholder="Password"
              isInvalid={userErrors.password}
            />
            <Feedback type="invalid">{userErrors.password}</Feedback>

            <div className="d-flex">
              <Button type="submit">Login</Button>
              <Link className="ml-auto" to="/register">
                <Button variant="success">Register</Button>
              </Link>
            </div>
          </Form>
        </div>

        <div className="offset-4 col-4">
          <h3>Restoran prijava</h3>
          <Form onSubmit={restaurantHandleSubmit}>
            <FormControl
              name="username"
              value={restaurantForm.username}
              onChange={restaurantHandleChange}
              placeholder="Username"
              isInvalid={restaurantErrors.username}
            />
            <Feedback type="invalid">{restaurantErrors.username}</Feedback>

            <FormControl
              type="password"
              name="password"
              value={restaurantForm.password}
              onChange={restaurantHandleChange}
              placeholder="Password"
              isInvalid={restaurantErrors.password}
            />
            <Feedback type="invalid">{restaurantErrors.password}</Feedback>

            <div className="d-flex">
              <Button type="submit">Login</Button>
              <Link className="ml-auto" to="/register">
                <Button variant="success">Register</Button>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
