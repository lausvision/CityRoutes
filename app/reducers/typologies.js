import types from "../actions/types";

const initialState = {
  typologies: [],
  loading: false,
  error: null,
};

const typologiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_STARTED: {
      return {
        ...state,
        error: null,
        loading: true,
      };
    }
    case types.LOAD_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case types.LOAD_SUCCEEDED: {
      return {
        ...state,
        loading: false,
        typologies: action.payload,
      };
    }
  }
  return state;
};

export default typologiesReducer;
