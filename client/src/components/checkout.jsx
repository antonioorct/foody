import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import {
  getUserLocations,
  getLocationIdFromName,
} from "../services/userService";
import { UserContext } from "../contexts/UserContext";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormCheck from "react-bootstrap/FormCheck";
import Button from "react-bootstrap/Button";
import { makeOrder } from "../services/orderService";

export default function Checkout() {
  const user = useContext(UserContext);
  const { state: cart } = useLocation();
  const { restaurantId } = useLocation();
  const [userLocations, setUserLocations] = useState([]);

  useEffect(async () => {
    console.log(restaurantId);
    const userLocations = await getUserLocations(user.id);

    setUserLocations(userLocations);
  }, []);

  const submitOrder = (e) => {
    e.preventDefault();
    console.log(e.target.elements.userLocation.value);

    const locationId = getLocationIdFromName(
      userLocations,
      e.target.elements.userLocation.value
    );

    makeOrder(
      cart,
      //TODO: change to UserContext.id
      3,
      restaurantId,
      locationId
    );
  };

  return (
    <div>
      <h3>Narudzba:</h3>
      {cart.map((meal, index) => (
        <div key={index}>{meal.name}</div>
      ))}
      {cart.length !== 0 && (
        <h3>
          Total:{" "}
          {cart.reduce((acc, currMeal) => acc + parseFloat(currMeal.price), 0)}{" "}
          kn
        </h3>
      )}
      <Form onSubmit={submitOrder}>
        <FormControl name="userLocation" as="select" custom>
          {userLocations.map((userLocation, index) => (
            <option key={index}>{userLocation.name}</option>
          ))}
        </FormControl>

        <FormCheck
          label="Plati gotovinom"
          type="radio"
          id="gotovina"
          name="pay-method"
          defaultChecked
        ></FormCheck>

        <Button type="submit">Naruci</Button>
      </Form>
    </div>
  );
}
