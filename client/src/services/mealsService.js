import http from "./httpService";

const apiEndPoint = "http://localhost:3001/api/meals";

export async function getMealsFromRestaurant(restaurantId) {
  const { data } = await http.get(apiEndPoint + "/" + restaurantId);

  return data;
}
