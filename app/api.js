require("dotenv").config();
const { BASE_URL } = require("./config");

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
  loadCitiesfromCountry: () => _apiCall("GET", `/cities/${country.id}`),
};