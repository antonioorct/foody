import http from "./httpService";

const apiEndPoint = process.env.REACT_APP_API_URL;

export async function getAllOrdersForUserId(userId) {
  const { data } = await http.get(apiEndPoint + "/orders/user/" + userId);

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
  await http.delete(apiEndPoint + "/orders/" + orderId);
}

export async function getAllOrdersForRestaurantId(restaurantId) {
  const { data } = await http.get(
    apiEndPoint + "/orders/restaurant/" + restaurantId
  );

  return data;
}
