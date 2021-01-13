import React, { useContext } from "react";
import { login } from "../services/authService";
import useForm from "../utils/useForm";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function Login() {
  const [user, setUser] = useContext(UserContext);
  const [form, handleChange] = useForm();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loggedInUser = await login(form);
    setUser(loggedInUser);
    history.push("/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <FormControl
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
      />

      <div className="d-flex">
        <Button type="submit">Login</Button>
        <Link className="ml-auto" to="/register">
          <Button variant="success">Register</Button>
        </Link>
      </div>
    </Form>
  );
}
