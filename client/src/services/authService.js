import http from "./httpService";
import jwtDecode from "jwt-decode";
import { initialState } from "../contexts/UserContext";

const apiEndPoint = "http://localhost:3001/api/";

export async function register(userInfo) {
  await http.post(apiEndPoint + "users", userInfo);
}

export async function login(userInfo) {
  const { data: jwt, status } = await http.post(apiEndPoint + "auth", userInfo);

  if (status === 404) console.log("User not found");
  else localStorage.setItem("token", jwt);
}

export async function logout() {
  localStorage.removeItem("token");
}

export async function getLoggedInUser() {
  const token = localStorage.getItem("token");
  if (!token) return initialState;
  else return { ...jwtDecode(token), isAuthenticated: true };
}
