import http from "./httpService";

const apiEndPoint = process.env.REACT_APP_API_URL;

async function registerRestaurant(restData) {
  const { data } = await http.post(apiEndPoint + "/restaurants", restData);

  return data;
}

async function getAllRestaurants() {
  const { data } = await http.get(apiEndPoint + "/restaurants");

  return data;
}

async function getRestaurant(restaurantId) {
  const { data } = await http.get(apiEndPoint + "/restaurants/" + restaurantId);

  return data;
}

async function updateRestaurant(restaurant) {
  const { data } = await http.put(
    apiEndPoint + "/restaurants/" + restaurant.id,
    restaurant
  );

  return data;
}

export {
  getAllRestaurants,
  getRestaurant,
  updateRestaurant,
  registerRestaurant,
};
