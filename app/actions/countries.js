import types from "./types";

export const loadCountries = () => async (dispatch, getState, api) => {
    dispatch({ type: types.LOAD_STARTED });
    try {
      let countries = await api.loadCountries();
      dispatch({ type: types.LOAD_SUCCEEDED, payload: countries });
    } catch (error) {
      dispatch({ type: types.LOAD_FAILED, payload: error });
    }
  }