import http from "./httpService";

const apiEndPoint = "http://localhost:3001/api/restaurants/";

async function getAllRestaurants() {
  const { data } = await http.get(apiEndPoint);

  return data;
}

async function getRestaurant(restaurantId) {
  const { data } = await http.get(apiEndPoint + restaurantId);

  return data;
}

export { getAllRestaurants, getRestaurant };
