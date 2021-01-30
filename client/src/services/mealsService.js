import http from "./httpService";

const apiEndPoint = "http://localhost:3001/api/meals/";

export async function getMealsFromRestaurant(restaurantId) {
  const { data } = await http.get(apiEndPoint + restaurantId);

  return data;
}

export async function newMeal(meal) {
  const { data } = await http.post(apiEndPoint + meal.restaurantId, meal);

  return data;
}

export async function deleteMeal(mealId) {
  const { data } = await http.delete(apiEndPoint + mealId);

  return data;
}
