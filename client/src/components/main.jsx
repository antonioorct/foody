import React, { useState, useEffect } from "react";
import { getAllRestaurants } from "../services/restaurantService";

export default function Main() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(async () => {
    setRestaurants(await getAllRestaurants());
  }, []);

  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <div className="border border-dark rounded p-2 my-2" key={index}>
          <a href={`/restaurant/${restaurant.id}`}>{restaurant.name}</a>
        </div>
      ))}
    </div>
  );
}
