import http from "./httpService";

const apiEndPoint = process.env.REACT_APP_API_URL;

async function registerUser(userInfo) {
  await http.post(apiEndPoint + "/users", userInfo);
}

async function getUserLocations(userId) {
  const { data } = await http.get(apiEndPoint + "/user_locations/" + userId);

  return data;
}

function getLocationIdFromName(locations, locationName) {
  return locations.find((location) => locationName === location.name).id;
}

async function getUser(userId) {
  const { data } = await http.get(apiEndPoint + "/users/" + userId);

  return data;
}

async function updateUser(userData) {
  const { data } = await http.put(
    apiEndPoint + "/users/" + userData.id,
    userData
  );

  return data;
}

async function newLocation(userId, locationName) {
  const { data } = await http.post(apiEndPoint + "/user_locations/" + userId, {
    name: locationName,
  });

  return data;
}

async function removeLocationFromUser(locationId) {
  http.delete(apiEndPoint + "/user_locations/" + locationId);
}

export {
  registerUser,
  getUserLocations,
  getLocationIdFromName,
  updateUser,
  getUser,
  newLocation,
  removeLocationFromUser,
};
