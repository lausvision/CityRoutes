//Update .env file like "BASE_URL=http://serverpage:2739" to modify the server URL
import { BASE_URL } from '@env'

const _apiCall = async (method, path, payload) => {
  let options = { method, mode: "cors" };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }
  try {
    const response = await fetch(`${BASE_URL}/api${path}`, options);
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e.json());
  }
};

export default {
  loadCountries: () => _apiCall("GET", "/countries"),
  loadCities: () => _apiCall("GET", "/cities"),
  loadCitiesfromCountry: (country) => _apiCall("GET", `/cities/${country.id}`),
  loadActivities: (userInputs) => _apiCall("POST", `/places/`, userInputs),
  loadNewActivities: (removedActivities) => _apiCall("POST", `/new-activities/`, removedActivities),
  loadRoutes: (definitivePlaces) => _apiCall("POST", `/routes/`, definitivePlaces),
  loadTypologies: () => _apiCall("GET", "/typologies"),
};
