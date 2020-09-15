
import types from './types';

// ALERT: userInputs should have the same structure and names as the server algorithm
export const loadActivities = (userInputs) => async (dispatch, getState, api) => {
  dispatch({ type: types.LOAD_STARTED_ACTIVITIES });
  try {
    let selectedActivities = await api.loadActivities(userInputs);
    dispatch({ type: types.LOAD_SUCCEEDED_ACTIVITIES, payload: selectedActivities });
  } catch (error) {
    dispatch({ type: types.LOAD_FAILED_ACTIVITIES, payload: error });
  }
}

// ALERT: removedActivities should have the same structure and names as the server algorithm. 
// When deleting an activity from the list, we ust add them to the removedActivities list.
// Update the activitiesState each time loadActivities or loadNewActivities is called.
export const loadNewActivities = (removedActivities) => async (dispatch, getState, api) => {
  dispatch({ type: types.LOAD_STARTED });
  try {
    let selectedActivities = await api.loadNewActivities(removedActivities);
    dispatch({ type: types.LOAD_SUCCEEDED, payload: selectedActivities });
  } catch (error) {
    dispatch({ type: types.LOAD_FAILED, payload: error });
  }
}
