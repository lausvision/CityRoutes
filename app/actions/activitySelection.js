
import types from './types';

export const loadActivities = () => async (dispatch, getState, api) => {
  dispatch({ type: types.LOAD_STARTED });
  try {
    let selectedActivities = await api.loadActivities(getState);
    dispatch({ type: types.LOAD_SUCCEEDED, payload: selectedActivities });
  } catch (error) {
    dispatch({ type: types.LOAD_FAILED, payload: error });
  }
}
