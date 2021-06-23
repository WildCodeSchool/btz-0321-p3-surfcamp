import { types } from "joi";
import { AppInitialState, AppState } from "./types";
import { Reducer, combineReducers } from "redux";

export const initialState: AppState = {
  user: {
    firstname: "john",
  },
};

const userReducer: Reducer<AppInitialState> = (
  state: AppState = initialState,
  action
) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        payload: action.payload,
      };
  }
};

const reducers = {
  uder: userReducer,
};

export default combineReducers(reducers);
