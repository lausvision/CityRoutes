import types from "../actions/types";

const initialState = {
  countries: [],
  loading: false,
  error: null,
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_STARTED_COUNTRIES: {
      return {
        ...state,
        error: null,
        loading: true,
      };
    }
    case types.LOAD_FAILED_COUNTRIES: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case types.LOAD_SUCCEEDED_COUNTRIES: {
      return {
        ...state,
        loading: false,
        countries: action.payload,
      };
    }
  }
  return state;
};

export default countriesReducer;
