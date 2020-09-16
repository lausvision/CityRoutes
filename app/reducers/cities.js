import types from "../actions/types";

const initialState = {
  cities: [],
  loading: false,
  error: null,
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_STARTED_CITIES: {
      return {
        ...state,
        error: null,
        loading: true,
      };
    }
    case types.LOAD_FAILED_CITIES: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case types.LOAD_SUCCEEDED_CITIES: {
      return {
        ...state,
        loading: false,
        cities: action.payload,
      };
    }
  }
  return state;
};

export default citiesReducer;
