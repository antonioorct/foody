import http from "./httpService";

const apiEndPoint = "http://localhost:3001/api/orders";

export async function makeOrder(meals, userId, restaurantId, locationId) {
  const newOrder = await http.post(apiEndPoint, {
    meals,
    userId,
    restaurantId,
    locationId,
  });

  console.log(newOrder);
}
