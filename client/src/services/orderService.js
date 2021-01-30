import http from "./httpService";

const apiEndPoint = "http://localhost:3001/api/orders";

export async function getAllOrdersForUserId(userId) {
  const { data } = await http.get(apiEndPoint + "/user/" + userId);

  return data;
}

export async function makeOrder(
  meals,
  userId,
  restaurantId,
  userLocationId,
  price
) {
  const { data } = await http.post(apiEndPoint, {
    meals,
    userId,
    restaurantId,
    userLocationId,
    price,
  });
}

export async function deleteOrder(orderId) {
  await http.delete(apiEndPoint + "/" + orderId);
}

export async function getAllOrdersForRestaurantId(restaurantId) {
  const { data } = await http.get(apiEndPoint + "/restaurant/" + restaurantId);

  return data;
}
