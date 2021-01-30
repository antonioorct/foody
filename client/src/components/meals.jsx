import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getMealsFromRestaurant } from "../services/mealsService";

import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { getRestaurant } from "../services/restaurantService";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState({});
  const [search, setSearch] = useState("");

  const { state } = useLocation();
  const routeParams = useParams();

  useEffect(async () => {
    if (state && state.length !== 0) setCart(state);
    setMeals(await getMealsFromRestaurant(routeParams.restaurantId));

    setRestaurant(await getRestaurant(routeParams.restaurantId));
  }, []);

  const removeFromCart = (itemIndex) => {
    let tempCart = [...cart];

    tempCart = tempCart.filter((item, index) => index !== itemIndex);
    setCart(tempCart);
  };

  return (
    <div>
      <div className="row" style={{ height: "300px" }}>
        <div className="col border rounded">
          <h2 className="mt-3">{restaurant.name}</h2>
          <h4>{restaurant.location}</h4>
          <h5>{restaurant.phone}</h5>
        </div>

        {restaurant.location && (
          <div className="col embed-responsive embed-responisve-16by9">
            <iframe
              className="embed-responsive-item"
              src={
                "https://www.google.com/maps/embed/v1/place?key=AIzaSyAs6Spn2fVVaFd9wvza8ZxdEESemGLyy2k&q=" +
                restaurant.location.replaceAll(" ", "+")
              }
            ></iframe>
          </div>
        )}
      </div>

      <div className="row">
        <div className="col">
          <hr />
          <h2>Ponuda</h2>
          <FormControl
            value={search}
            onChange={({ target }) => setSearch(target.value)}
            placeholder="Pretraga"
          ></FormControl>

          {meals
            .filter((meal) =>
              meal.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((meal, index) => (
              <div className="border border-dark rounded p-2 my-2" key={index}>
                <p>
                  <strong>{meal.name}</strong>
                  <br />
                  {meal.price + " kn"}
                </p>
                <Button onClick={() => setCart([...cart, meal])}>
                  Dodaj u kosaricu
                </Button>
              </div>
            ))}
        </div>

        {cart.length !== 0 && (
          <div className="col-2">
            <h2>Kosarica</h2>

            {cart.map((meal, index) => (
              <div key={index}>
                <Button
                  variant="outline-danger"
                  onClick={() => removeFromCart(index)}
                >
                  x
                </Button>
                {meal.name}
              </div>
            ))}

            <h3>
              Ukupno:{" "}
              {cart
                .reduce((acc, currMeal) => acc + parseFloat(currMeal.price), 0)
                .toFixed(2)}{" "}
              kn
            </h3>

            <Link
              to={{
                pathname: "/checkout",
                state: cart,
                restaurantId: routeParams.restaurantId,
              }}
            >
              <Button>Naruci</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
