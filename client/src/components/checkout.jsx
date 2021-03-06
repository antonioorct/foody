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
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Checkout() {
  const user = useContext(UserContext)[0];
  const { state: cart } = useLocation();
  const { restaurantId } = useLocation();
  const [userLocations, setUserLocations] = useState([]);
  const [redirecting, setRedirecting] = useState(false);
  const history = useHistory();

  useEffect(async () => {
    const userLocations = await getUserLocations(user.id);

    setUserLocations(userLocations);
  }, []);

  const submitOrder = (e) => {
    e.preventDefault();

    const locationId = getLocationIdFromName(
      userLocations,
      e.target.elements.userLocation.value
    );

    const price = cart
      .reduce((acc, currMeal) => acc + parseFloat(currMeal.price), 0)
      .toFixed(2);

    makeOrder(cart, user.id, restaurantId, locationId, price);

    setTimeout(() => {
      history.push("/orders");
    }, 3000);

    setRedirecting(true);
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
          {cart
            .reduce((acc, currMeal) => acc + parseFloat(currMeal.price), 0)
            .toFixed(2)}{" "}
          kn
        </h3>
      )}
      <hr />
      <h5>Adresa dostave:</h5>
      <Form onSubmit={submitOrder}>
        <FormControl
          name="userLocation"
          as="select"
          custom
          disabled={userLocations.length === 0}
        >
          {userLocations.map((userLocation, index) => (
            <option key={index}>{userLocation.name}</option>
          ))}
        </FormControl>
        <p style={{ color: "red" }}>
          {userLocations.length === 0 &&
            "Potrebno je dodati barem jednu adresu na profilu. (U gornje desnom kutu)"}
        </p>

        <FormCheck
          label="Plati gotovinom"
          type="radio"
          id="cash"
          name="pay-method"
          defaultChecked
        ></FormCheck>
        <FormCheck
          label="Plati karticom"
          type="radio"
          id="card"
          name="pay-method"
          disabled
        ></FormCheck>

        {!redirecting && (
          <div>
            <Button
              variant="success"
              type="submit"
              disabled={userLocations.length === 0}
            >
              Naruci
            </Button>
            <Link
              to={{
                pathname: "/restaurant/" + restaurantId,
                state: cart,
              }}
            >
              <Button>Povratak</Button>
            </Link>
          </div>
        )}
      </Form>

      {redirecting && <p>Slanje narudzbe... Bit cete uskoro preusmjereni.</p>}
    </div>
  );
}
