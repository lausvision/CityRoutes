import types from "./types";

export const loadTypologies = () => async (dispatch, getState, api) => {
    dispatch({ type: types.LOAD_STARTED_TYPOLOGIES });
    try {
      let typologies = await api.loadTypologies();
      dispatch({ type: types.LOAD_SUCCEEDED_TYPOLOGIES, payload: typologies });
    } catch (error) {
      dispatch({ type: types.LOAD_FAILED_TYPOLOGIES, payload: error });
    }
  }