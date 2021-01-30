import http from "./httpService";

const apiEndPoint = "http://localhost:3001/api/restaurants/";

async function registerRestaurant(restData) {
  const { data } = await http.post(apiEndPoint, restData);

  return data;
}

async function getAllRestaurants() {
  const { data } = await http.get(apiEndPoint);

  return data;
}

async function getRestaurant(restaurantId) {
  const { data } = await http.get(apiEndPoint + restaurantId);

  return data;
}

async function updateRestaurant(restaurant) {
  const { data } = await http.put(apiEndPoint + restaurant.id, restaurant);

  return data;
}

export {
  getAllRestaurants,
  getRestaurant,
  updateRestaurant,
  registerRestaurant,
};
