import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

import Table from "react-bootstrap/Table";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import {
  updateUser,
  getUser,
  getUserLocations,
  removeLocationFromUser,
  newLocation,
} from "../services/userService";
import InputGroup from "react-bootstrap/InputGroup";

export default function Profile() {
  const [user, setUser] = useContext(UserContext);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({});
  const [locations, setLocations] = useState([]);
  const [locationForm, setLocationForm] = useState("");

  useEffect(async () => {
    const currUser = await getUser(user.id);
    const userLocations = await getUserLocations(user.id);

    setForm({
      firstName: currUser.firstName,
      lastName: currUser.lastName,
      phone: currUser.phone,
    });
    setLocations(userLocations);
  }, []);

  const handleChange = ({ target }) =>
    setForm({ ...form, [target.name]: target.value });

  const handleSubmit = () => {
    updateUser({ ...form, id: user.id });
  };

  return (
    <div>
      <h2>Profil</h2>
      {editing ? (
        <Button
          onClick={() => {
            setEditing(false);
            handleSubmit();
          }}
        >
          Spremi promjene
        </Button>
      ) : (
        <Button onClick={() => setEditing(true)}>Promijeni</Button>
      )}
      <Table borderless>
        <tbody>
          <tr>
            <td>
              <strong>Ime</strong>
              <br />
              {editing ? (
                <FormControl
                  name="firstName"
                  onChange={handleChange}
                  value={form.firstName}
                ></FormControl>
              ) : (
                form.firstName
              )}
              {}
            </td>
            <td>
              <strong>Prezime</strong>
              <br />
              {editing ? (
                <FormControl
                  name="lastName"
                  onChange={handleChange}
                  value={form.lastName}
                ></FormControl>
              ) : (
                form.lastName
              )}
            </td>
            <td>
              <strong>Broj</strong>
              <br />
              {editing ? (
                <FormControl
                  name="phone"
                  onChange={handleChange}
                  value={form.phone}
                ></FormControl>
              ) : (
                form.phone
              )}
            </td>
          </tr>

          <tr>
            <td>
              <strong>Username</strong>
              <br />
              {user.username}
            </td>
            <td>
              <strong>E-mail</strong>
              <br />
              {user.email}
            </td>
          </tr>
        </tbody>
      </Table>

      <h2>Adrese</h2>
      <InputGroup>
        <FormControl
          onChange={({ target }) => setLocationForm(target.value)}
          value={locationForm}
        ></FormControl>
        <InputGroup.Append>
          <Button
            variant="success"
            onClick={async () => {
              const newLoc = await newLocation(user.id, locationForm);

              setLocations([...locations, newLoc]);
              setLocationForm("");
            }}
          >
            Dodaj
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <div style={{ lineHeight: "3" }}>
        {locations.map((loc, index) => (
          <div key={index}>
            <Button
              style={{ lineHeight: "0", padding: "15px 9px" }}
              variant="danger"
              onClick={() => {
                let tempLocations = locations.filter(
                  (retLoc) => retLoc.id !== locations[index].id
                );

                setLocations(tempLocations);
                removeLocationFromUser(locations[index].id);
              }}
            >
              ✕
            </Button>
            {" " + loc.name}
          </div>
        ))}
      </div>
    </div>
  );
}
