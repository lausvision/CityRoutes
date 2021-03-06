import types from "../actions/types";

const initialState = {
  routes: [],
  loading: false,
  error: null,
};

const routesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_STARTED_ROUTES: {
      return {
        ...state,
        error: null,
        loading: true,
      };
    }
    case types.LOAD_FAILED_ROUTES: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case types.LOAD_SUCCEEDED_ROUTES: {
      return {
        ...state,
        loading: false,
        routes: action.payload,
      };
    }
  }
  return state;
};

export default routesReducer;
