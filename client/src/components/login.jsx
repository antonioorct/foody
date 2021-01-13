import React, { useContext } from "react";
import { login } from "../services/authService";
import useForm from "../utils/useForm";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Feedback from "react-bootstrap/Feedback";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function Login() {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();

  const doSubmit = async (e) => {
    const loggedInUser = await login(form);
    setUser(loggedInUser);
    history.push("/");
  };
  const validation = {
    username: { required: true, minLength: 4 },
    password: { required: true },
  };
  const [form, errors, handleChange, handleSubmit] = useForm(
    doSubmit,
    validation
  );

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Username"
        isInvalid={errors.username}
      />
      <Feedback type="invalid">{errors.username}</Feedback>

      <FormControl
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        isInvalid={errors.password}
      />
      <Feedback type="invalid">{errors.password}</Feedback>

      <div className="d-flex">
        <Button type="submit">Login</Button>
        <Link className="ml-auto" to="/register">
          <Button variant="success">Register</Button>
        </Link>
      </div>
    </Form>
  );
}
