import React, { useState } from "react";

import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { setLocale } from "yup";
import { useForm } from "react-hook-form";
import { registerUser } from "../services/userService";
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
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(8)
    .matches(/[0-9]+/g),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Lozinke se moraju podudarati"),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

export default function UserRegister() {
  const doSubmit = async (formData) => {
    setMessage(null);
    try {
      await registerUser(formData);
      setMessage({
        message: "Uspjesna registracija. Preusmjeravanje na prijavu...",
        style: "lime",
      });
      setTimeout(() => history.push("/login"), 2500);
    } catch (e) {
      setMessage({ message: e.response.data, style: "red" });
    }
  };

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [message, setMessage] = useState(null);
  const history = useHistory();

  return (
    <div className="text-center">
      <a href="/">
        <Image style={{ height: "300px" }} src="img/logo.png"></Image>
      </a>
      <Form className="offset-3 col-6" onSubmit={handleSubmit(doSubmit)}>
        <FormControl
          name="username"
          ref={register}
          placeholder="Korisnicko ime"
        />
        <p style={{ color: "red" }}>{errors.username?.message}</p>

        <FormControl name="email" ref={register} placeholder="E-mail" />
        <p style={{ color: "red" }}>{errors.email?.message}</p>

        <FormControl
          type="password"
          name="password"
          ref={register}
          placeholder="Lozinka"
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
        <FormControl
          type="password"
          name="repeatPassword"
          ref={register}
          placeholder="Ponovi lozinku"
        />
        <p style={{ color: "red" }}>{errors.repeatPassword?.message}</p>

        <Form.Row>
          <Col>
            <FormControl name="firstName" ref={register} placeholder="Ime" />
            <p style={{ color: "red" }}>{errors.firstName?.message}</p>
          </Col>

          <Col>
            <FormControl name="lastName" ref={register} placeholder="Prezime" />
            <p style={{ color: "red" }}>{errors.lastName?.message}</p>
          </Col>
        </Form.Row>

        <Button variant="success" type="submit">
          Registracija
        </Button>
        {message && (
          <div style={{ color: message.style }}>{message.message}</div>
        )}
      </Form>
    </div>
  );
}
