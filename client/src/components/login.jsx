import React from "react";
import { login } from "../services/authService";
import useForm from "../utils/useForm";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function Register() {
  const [form, handleChange] = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl
        name="username"
        value={form.username}
        placeholder="Username"
      />
      <FormControl
        type="password"
        name="password"
        value={form.password}
        placeholder="Password"
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
