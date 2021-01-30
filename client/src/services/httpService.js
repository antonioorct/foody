import axios from "axios";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers["x-access-token"] = token;

  return config;
});

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
