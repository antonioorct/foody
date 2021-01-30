import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAllRestaurants } from "../services/restaurantService";
import FormControl from "react-bootstrap/FormControl";

export default function Main() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const history = useHistory();

  useEffect(async () => {
    setRestaurants(await getAllRestaurants());
  }, []);

  return (
    <div>
      <div>
        <FormControl
          value={search}
          onChange={({ target }) => setSearch(target.value)}
          placeholder="Pretraga"
        ></FormControl>
      </div>

      <div className="row">
        {restaurants
          .filter((restaurant) =>
            restaurant.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((restaurant, index) => (
            <div
              className="col-4 my-2 text-center align-middle"
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/restaurant/" + restaurant.id)}
              key={index}
            >
              <div
                style={{ width: "1%", height: "200px" }}
                className="d-table-cell border rounded align-middle"
              >
                {restaurant.name}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
