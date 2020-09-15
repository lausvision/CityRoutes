import types from "../actions/types";

const initialState = {
  activities: [],
  loading: false,
  error: null,
};

const activitiesReducer = (state = initialState, action) => {
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
        activities: action.payload,
      };
    }
  }
  return state;
};

export default activitiesReducer;
