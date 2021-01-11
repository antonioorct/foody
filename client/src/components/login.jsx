import React from "react";
import { login } from "../services/authService";
import useForm from "../utils/useForm";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [form, handleChange] = useForm();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(form);
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
      <Button type="submit">Submit</Button>
    </Form>
  );
}
