require("dotenv").config();
//const { BASE_URL } = require("./config");
const BASE_URL = "http://localhost:8080";

const _apiCall = async (method, path, payload) => {
  let options = { method, mode: "cors" };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }
  const response = await fetch(`${BASE_URL}/api${path}`, options);
  const result = await response.json();
  return result;
};

export default {
  loadCountries: () => _apiCall("GET", "/countries"),
  loadCities: () => _apiCall("GET", "/cities"),
  loadCitiesfromCountry: (country) => _apiCall("GET", `/cities/${country.id}`),
  loadTypologies: () => _apiCall("GET", "/typologies"),
  loadActivities: (payload) => _apiCall("GET", "/places", payload),
  loadRoutes: (payload) => _apiCall("GET", "/routes", payload),
};
