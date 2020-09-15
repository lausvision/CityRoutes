
import types from './types';

export const loadRoutes = () => async (dispatch, getState , api) => {
  dispatch({ type: types.LOAD_STARTED });
  try {
    let selectedRoute = await api.loadRoutes(getState.activitiesReducer);
    dispatch({ type: types.LOAD_SUCCEEDED, payload: selectedRoute });
  } catch (error) {
    dispatch({ type: types.LOAD_FAILED, payload: error });
  }
}
