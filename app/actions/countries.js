import types from "./types";

export const loadCountries = () => async (dispatch, getState, api) => {
    dispatch({ type: types.LOAD_STARTED_COUNTRIES });
    try {
      let countries = await api.loadCountries();
      dispatch({ type: types.LOAD_SUCCEEDED_COUNTRIES, payload: countries });
    } catch (error) {
      dispatch({ type: types.LOAD_FAILED_COUNTRIES, payload: error });
    }
  }