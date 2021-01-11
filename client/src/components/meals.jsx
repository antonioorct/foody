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

  return (
    <div>
      <Link to={{ pathname: "/checkout", state: cart }}>
        <Button>Checkout</Button>
      </Link>

      {cart.length !== 0 && <h2>Cart</h2>}
      {cart.map((meal, index) => (
        <div key={index}>{meal.name}</div>
      ))}
      {cart.length !== 0 && (
        <h3>
          Total:{" "}
          {cart.reduce((acc, currMeal) => acc + parseFloat(currMeal.price), 0)}
        </h3>
      )}

      {meals.map((meal, index) => (
        <div className="border border-dark rounded p-2 my-2" key={index}>
          <p>
            {meal.name}
            <br />
            {meal.price}
          </p>
          <Button onClick={() => setCart([...cart, meal])}>Add to cart</Button>
        </div>
      ))}
    </div>
  );
}
