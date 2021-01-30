import http from "./httpService";
import jwtDecode from "jwt-decode";
import { initialState } from "../contexts/UserContext";

const apiEndPoint = process.env.REACT_APP_API_URL;

export async function loginUser(userInfo) {
  const { data: jwt } = await http.post(apiEndPoint + "/auth/user", userInfo);

  localStorage.setItem("token", jwt);

  return await getLoggedInUser();
}

export async function loginRestaurant(restaurantInfo) {
  const { data: jwt, status } = await http.post(
    apiEndPoint + "/auth/restaurant",
    restaurantInfo
  );

  localStorage.setItem("token", jwt);

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
