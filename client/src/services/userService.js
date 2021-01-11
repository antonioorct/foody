import http from "./httpService";

const apiEndPoint = "http://localhost:3001/api/user_locations";

export async function getUserLocations(userId) {
  const { data } = await http.get(apiEndPoint + "/" + 3);

  return data;
}

export function getLocationIdFromName(locations, locationName) {
  return locations.find((location) => locationName === location.name).id;
}
