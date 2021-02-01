import http from "./httpService";

const apiEndPoint = process.env.REACT_APP_API_URL;

export async function getMealsFromRestaurant(restaurantId) {
  const { data } = await http.get(apiEndPoint + "/meals/" + restaurantId);

  return data;
}

export async function newMeal(meal) {
  const { data } = await http.post(
    apiEndPoint + "/meals/" + meal.restaurantId,
    meal
  );

  return data;
}

export async function deleteMeal(mealId) {
  const { data } = await http.delete(apiEndPoint + "/meals/" + mealId);

  return data;
}
