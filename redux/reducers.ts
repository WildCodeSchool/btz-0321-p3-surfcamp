import { types } from "joi";
import { AppInitialState, AppState } from "./types";
import { Reducer, combineReducers, AnyAction } from "redux";

export const initialState: AppState = {
  user : "",
  email:""
};

const userReducer = (
  state: AppState = initialState,
  action:AnyAction
) => {
  switch (action.type) {
    case types.IS_LOGIN:
      return {
        ...state,
        payload: action.payload,
      };
  }
};

const reducers = {
  user: userReducer,
};

export default combineReducers(reducers);
