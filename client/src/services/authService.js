import http from "./httpService";
import jwtDecode from "jwt-decode";
import { initialState } from "../contexts/UserContext";

const apiEndPoint = "http://localhost:3001/api/";

export async function register(userInfo) {
  await http.post(apiEndPoint + "users", userInfo);
}

export async function loginUser(userInfo) {
  console.log(userInfo);
  const { data: jwt, status } = await http.post(
    apiEndPoint + "auth/user",
    userInfo
  );

  if (status === 404) console.log("User not found");
  else localStorage.setItem("token", jwt);

  return await getLoggedInUser();
}

export async function loginRestaurant(restaurantInfo) {
  const { data: jwt, status } = await http.post(
    apiEndPoint + "auth/restaurant",
    restaurantInfo
  );

  if (status === 404) console.log("User not found");
  else localStorage.setItem("token", jwt);

  return await getLoggedInUser();
}

export async function logout() {
  localStorage.removeItem("token");
}

export async function getLoggedInUser() {
  const token = localStorage.getItem("token");
  if (!token) return initialState;
  else return { ...jwtDecode(token), isAuthenticated: true };
}

export async function getJwtHeader() {
  return { headers: localStorage.getItem("token") };
}
