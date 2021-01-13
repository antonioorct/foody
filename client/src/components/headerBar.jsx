import React, { useContext, useState } from "react";
import { UserContext, initialState } from "../contexts/UserContext";

import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { logout } from "../services/authService";

export default function HeaderBar() {
  const [user, setUser] = useContext(UserContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Foody</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav>
        <Nav.Link href="/orders">Narudzbe</Nav.Link>
      </Nav>

      <Nav className="ml-auto">
        {user.isAuthenticated ? (
          <>
            <Nav.Link>
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
          </>
        ) : (
          <Button href="/login">Login</Button>
        )}
      </Nav>
    </Navbar>
  );
}
