import { AppInitialState, AppState } from "./types";
import { Reducer, combineReducers, AnyAction } from "redux";
import * as  types from '../redux/types'


export const initialState: AppState = {
  email : "",
  startSession: new Date(),
  role: ""
};

const userReducer = (
  state: AppState = initialState,
  action:AnyAction
) => {
  switch (action.type) {
    case types.SESSION_LOGIN:
      return {
        ...state,
        email: action.payload.email,
        role: action.payload.role,
        startSession: action.payload.startSession,
      };
  }
  return state
};

const reducers = {
  user: userReducer,
};

export default combineReducers(reducers);
