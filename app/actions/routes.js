
import types from './types';

export const loadRoutes = () => async (dispatch, getState , api) => {
  dispatch({ type: types.LOAD_STARTED_ROUTES });
  try {
    let selectedRoute = await api.loadRoutes(getState.activitiesReducer);
    dispatch({ type: types.LOAD_SUCCEEDED_ROUTES, payload: selectedRoute });
  } catch (error) {
    dispatch({ type: types.LOAD_FAILED_ROUTES, payload: error });
  }
}
