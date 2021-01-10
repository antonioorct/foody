import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function HeaderBar() {
  const [user, setUser] = useContext(UserContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Foody</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="ml-auto">
        {user ? (
          <>
            <Nav.Link>{`${user.firstName} ${user.lastName}`}</Nav.Link>
            <Button>Logout</Button>
          </>
        ) : (
          <Button href="/login">Login</Button>
        )}
      </Nav>
    </Navbar>
  );
}
