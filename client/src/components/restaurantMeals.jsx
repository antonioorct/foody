import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import {
  getMealsFromRestaurant,
  newMeal,
  deleteMeal,
} from "../services/mealsService";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";

const schema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required().positive(),
});

export default function RestaurantMeals() {
  const user = useContext(UserContext)[0];
  const [meals, setMeals] = useState([]);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(async () => {
    const tempMeals = await getMealsFromRestaurant(user.id);

    setMeals(tempMeals);
  }, []);

  const onSubmit = async ({ name, price }) => {
    const tempMeal = await newMeal({ name, price, restaurantId: user.id });

    setMeals([...meals, tempMeal]);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>Ime jela</FormLabel>
        <FormControl name="name" ref={register}></FormControl>
        <p>{errors.name?.message}</p>
        <FormLabel>Cijena jela</FormLabel>
        <FormControl name="price" ref={register}></FormControl>
        <p>{errors.price?.message}</p>
        <Button type="submit" variant="success">
          Dodaj jelo
        </Button>
      </Form>
      {meals.map((meal, index) => (
        <div className="border border-dark rounded p-2 my-2" key={index}>
          <p>
            <strong>{meal.name}</strong>
            <br />
            {parseFloat(meal.price).toFixed(2) + " kn"}
            <Button
              className="float-right"
              style={{ lineHeight: "0", padding: "15px 9px" }}
              variant="danger"
              onClick={() => {
                deleteMeal(meal.id);
                let tempMeals = [...meals];

                tempMeals = tempMeals.filter((item, idx) => index !== idx);
                setMeals(tempMeals);
              }}
            >
              ✕
            </Button>
          </p>
        </div>
      ))}
    </div>
  );
}
