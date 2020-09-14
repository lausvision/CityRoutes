import types from "../actions/types";

const initialState = {
  selectedActivities: [],
  loading: false,
  error: null,
};

const SelectionReducer = (state = initialState, action) => {
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
        todos: action.payload,
      };
    }
  }
  return state;
};

export default SelectionReducer;
