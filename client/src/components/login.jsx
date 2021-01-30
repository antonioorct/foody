import React, { useContext, useState } from "react";
import { loginRestaurant, loginUser } from "../services/authService";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import * as yup from "yup";
import { setLocale } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

setLocale({
  mixed: {
    required: "Polje ne smije biti prazno.",
  },
  string: {
    email: "Polje mora sadrzavati vazecu e-mail adresu.",
    min: "Polje mora sadrzavati minimalno ${min} znakova.",
    max: "Polje mora sadrzavati maksimalno ${max} znakova.",
    matches: "Polje mora sadrzavati minimalno 1 broj.",
  },
});

const schema = yup.object().shape({
  username: yup.string().required().min(4).max(30),
  password: yup.string().required().min(8),
});

export default function Login() {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  const [serverErrorUser, setServerErrorUser] = useState("");
  const [serverErrorRestaurant, setServerErrorRestaurant] = useState("");

  const {
    register: registerUser,
    handleSubmit: handleSubmitUser,
    errors: errorsUser,
  } = useForm({ resolver: yupResolver(schema) });

  const {
    register: registerRestaurant,
    handleSubmit: handleSubmitRestaurant,
    errors: errorsRestaurant,
  } = useForm({ resolver: yupResolver(schema) });

  const doSubmitUser = async ({ username, password }) => {
    setServerErrorUser("");

    try {
      const loggedInUser = await loginUser({ username, password });
      setUser(loggedInUser);
      history.push("/restaurants");
    } catch (e) {
      setServerErrorUser(e.response.data);
    }
  };

  const doSubmitRestaurant = async ({ username, password }) => {
    setServerErrorRestaurant("");

    try {
      const loggedInRestaurant = await loginRestaurant({ username, password });
      setUser(loggedInRestaurant);
      history.push("/orders");
    } catch (e) {
      setServerErrorRestaurant(e.response.data);
    }
  };

  return (
    <div className="text-center">
      <a href="/">
        <Image style={{ height: "300px" }} src="img/logo.png"></Image>
      </a>
      <div className="row">
        <div className="col-4">
          <h3>Korisnicka prijava</h3>
          <Form onSubmit={handleSubmitUser(doSubmitUser)}>
            <FormControl
              name="username"
              placeholder="Korisnicko ime"
              ref={registerUser}
              autoFocus
            />
            <p style={{ color: "red" }}>{errorsUser.username?.message}</p>

            <FormControl
              type="password"
              name="password"
              ref={registerUser}
              placeholder="Lozinka"
            />
            <p style={{ color: "red" }}>{errorsUser.password?.message}</p>
            <p style={{ color: "red" }}>{serverErrorUser}</p>

            <div className="d-flex">
              <Button variant="success" type="submit">
                Prijava
              </Button>
              <Link className="ml-auto" to="/register_user">
                <Button>Registracija</Button>
              </Link>
            </div>
          </Form>
        </div>

        <div className="offset-4 col-4">
          <h3>Restoran prijava</h3>
          <Form onSubmit={handleSubmitRestaurant(doSubmitRestaurant)}>
            <FormControl
              name="username"
              placeholder="Korisnicko ime"
              ref={registerRestaurant}
            />
            <p style={{ color: "red" }}>{errorsRestaurant.username?.message}</p>

            <FormControl
              type="password"
              name="password"
              ref={registerRestaurant}
              placeholder="Lozinka"
            />
            <p style={{ color: "red" }}>{errorsRestaurant.password?.message}</p>
            <p style={{ color: "red" }}>{serverErrorRestaurant}</p>

            <div className="d-flex">
              <Button variant="success" type="submit">
                Prijava
              </Button>
              <Link className="ml-auto" to="/register_restaurant">
                <Button>Registracija</Button>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
