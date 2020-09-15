import types from "../actions/types";

const initialState = {
  activities: [],
  loading: false,
  error: null,
};

const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_STARTED_ACTIVITIES: {
      return {
        ...state,
        error: null,
        loading: true,
      };
    }
    case types.LOAD_FAILED_ACTIVITIES: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case types.LOAD_SUCCEEDED_ACTIVITIES: {
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
