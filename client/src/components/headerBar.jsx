import React, { useContext, useState } from "react";
import { UserContext, initialState } from "../contexts/UserContext";

import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { logout } from "../services/authService";
import { Link } from "react-router-dom";

export default function HeaderBar() {
  const [user, setUser] = useContext(UserContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <Image
          style={{ height: "60px" }}
          className="img-responsive"
          src="/img/logo.png"
        ></Image>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav>
        <Nav.Link href="/orders">Narudzbe</Nav.Link>
      </Nav>

      <Nav className="ml-auto">
        {user.isAuthenticated ? (
          <span>
            <Nav.Link href="/profile">
              {user.firstName ? user.firstName : user.username}
            </Nav.Link>
            <Button
              onClick={() => {
                logout();
                setUser(initialState);
              }}
            >
              Logout
            </Button>
          </span>
        ) : (
          <Button href="/login">Login</Button>
        )}
      </Nav>
    </Navbar>
  );
}
