import React from "react";
import { register } from "../services/authService";
import useForm from "../utils/useForm";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Feedback from "react-bootstrap/Feedback";
import Button from "react-bootstrap/Button";

export default function Register() {
  // const validation = {
  //   firstName: { required: true },
  //   username: { required: true, minLength: 4 },
  //   email: { required: true, type: "mail" },
  //   password: { required: true },
  // };

  const doSubmit = () => {
    console.log("Submitted!");
    // register(form);
  };

  const [form, errors, handleChange, handleSubmit] = useForm(doSubmit);

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
    </Form>
  );
}
