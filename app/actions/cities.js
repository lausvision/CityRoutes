import types from "./types";

export const loadCities = () => async (dispatch, getState, api) => {
    dispatch({ type: types.LOAD_STARTED_CITIES });
    try {
      let cities = await api.loadCities();
      dispatch({ type: types.LOAD_SUCCEEDED_CITIES, payload: cities });
    } catch (error) {
      dispatch({ type: types.LOAD_FAILED, payload: error });
    }
  }

  export const loadCitiesfromCountry = (country) => async (dispatch, getState, api) => {
    dispatch({ type: types.LOAD_STARTED_CITIES });
    try {
      let cities = await api.loadCities(country.id);
      dispatch({ type: types.LOAD_SUCCEEDED_CITIES, payload: cities });
    } catch (error) {
      dispatch({ type: types.LOAD_FAILED_CITIES, payload: error });
    }
  }