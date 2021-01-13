import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getMealsFromRestaurant } from "../services/mealsService";

import Button from "react-bootstrap/Button";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);

  const routeParams = useParams();

  useEffect(async () => {
    setMeals(await getMealsFromRestaurant(routeParams.restaurantId));
  }, []);

  const removeFromCart = (itemIndex) => {
    let tempCart = [...cart];

    tempCart = tempCart.filter((item, index) => index !== itemIndex);
    setCart(tempCart);
  };

  return (
    <div className="row">
      <div className="col">
        {meals.map((meal, index) => (
          <div className="border border-dark rounded p-2 my-2" key={index}>
            <p>
              {meal.name}
              <br />
              {meal.price}
            </p>
            <Button onClick={() => setCart([...cart, meal])}>
              Add to cart
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
            <Button>Checkout</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
