import React, { useState } from "react";
import { register } from "../services/authService";
import useForm from "../utils/useForm";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Feedback from "react-bootstrap/Feedback";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

export default function Register() {
  const doSubmit = async () => {
    setMessage(null);
    try {
      await register(form);
      setMessage({
        message: "Registration successful. Redirecting to login...",
        style: "lime",
      });
      setTimeout(() => history.push("/login"), 2500);
    } catch (e) {
      setMessage({ message: e.response.data, style: "red" });
    }
  };

  const validation = {
    firstName: { required: true },
    username: { required: true, minLength: 4 },
    email: { required: true, type: "mail" },
    password: { required: true },
  };
  const [form, errors, handleChange, handleSubmit] = useForm(
    doSubmit,
    validation
  );
  const [message, setMessage] = useState(null);
  const history = useHistory();

  return (
    <Form style={{ whiteSpace: "pre-line" }} onSubmit={handleSubmit}>
      <FormControl
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
        placeholder="First name"
        isInvalid={errors.firstName}
      />
      <Feedback type="invalid">{errors.firstName}</Feedback>
      <FormControl
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Username"
        isInvalid={errors.username}
      />
      <Feedback type="invalid">{errors.username}</Feedback>
      <FormControl
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="E-mail"
        isInvalid={errors.email}
      />
      <Feedback type="invalid">{errors.email}</Feedback>
      <FormControl
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        isInvalid={errors.password}
      />
      <Feedback type="invalid">{errors.password}</Feedback>
      <Button type="submit">Register</Button>
      {message && <div style={{ color: message.style }}>{message.message}</div>}
    </Form>
  );
}
