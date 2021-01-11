import http from "./httpService";

const apiEndPoint = "http://localhost:3001/api/restaurants";

export async function getAllRestaurants() {
  const { data } = await http.get(apiEndPoint);

  return data;
}
