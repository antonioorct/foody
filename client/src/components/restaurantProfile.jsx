import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

import Table from "react-bootstrap/Table";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { getRestaurant, updateRestaurant } from "../services/restaurantService";

export default function RestaurantProfile() {
  const [user, setUser] = useContext(UserContext);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({});

  useEffect(async () => {
    const currRest = await getRestaurant(user.id);

    setForm({
      name: currRest.name,
      location: currRest.location,
      phone: currRest.phone,
    });
  }, []);

  const handleChange = ({ target }) =>
    setForm({ ...form, [target.name]: target.value });

  const handleSubmit = () => {
    if (Object.keys(form).findIndex((key) => form[key] === "") === -1) {
      setEditing(false);
      updateRestaurant({ ...form, id: user.id });
    }
  };

  return (
    <div>
      <h2>Profil</h2>
      {editing ? (
        <Button onClick={() => handleSubmit()}>Spremi promjene</Button>
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
                  name="name"
                  onChange={handleChange}
                  value={form.name}
                ></FormControl>
              ) : (
                form.name
              )}
              {}
            </td>
            <td>
              <strong>Adresa</strong>
              <br />
              {editing ? (
                <FormControl
                  name="location"
                  onChange={handleChange}
                  value={form.location}
                ></FormControl>
              ) : (
                form.location
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
    </div>
  );
}
