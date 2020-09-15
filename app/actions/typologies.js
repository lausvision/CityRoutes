import types from "./types";

export const loadTypologies = () => async (dispatch, getState, api) => {
    dispatch({ type: types.LOAD_STARTED });
    try {
      let typologies = await api.loadTypologies();
      dispatch({ type: types.LOAD_SUCCEEDED, payload: typologies });
    } catch (error) {
      dispatch({ type: types.LOAD_FAILED, payload: error });
    }
  }