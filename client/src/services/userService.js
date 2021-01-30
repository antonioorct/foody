import http from "./httpService";

const apiEndPointUserLocations = "http://localhost:3001/api/user_locations/";
const apiEndPointUsers = "http://localhost:3001/api/users/";

async function registerUser(userInfo) {
  await http.post(apiEndPointUsers, userInfo);
}

async function getUserLocations(userId) {
  const { data } = await http.get(apiEndPointUserLocations + userId);

  return data;
}

function getLocationIdFromName(locations, locationName) {
  return locations.find((location) => locationName === location.name).id;
}

async function getUser(userId) {
  const { data } = await http.get(apiEndPointUsers + userId);

  return data;
}

async function updateUser(userData) {
  const { data } = await http.put(apiEndPointUsers + userData.id, userData);

  return data;
}

async function newLocation(userId, locationName) {
  const { data } = await http.post(apiEndPointUserLocations + userId, {
    name: locationName,
  });

  return data;
}

async function removeLocationFromUser(locationId) {
  http.delete(apiEndPointUserLocations + locationId);
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
