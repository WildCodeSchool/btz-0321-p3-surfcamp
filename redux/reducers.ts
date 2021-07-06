import { combineReducers, AnyAction } from "redux";
import * as types from "../redux/types";

export const initialState: types.AppState = {
  id: "",
  email: "",
  startSession: new Date(),
  role: "",
  picture: "",
  firstname: "",
};

const userReducer = (
  state: types.AppState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case types.SESSION_LOGIN:
      return {
        ...state,
        picture: action.payload.picture,
        email: action.payload.email,
        role: action.payload.role,
        id: action.payload.id,
        firstname: action.payload.firstname,
        startSession: action.payload.startSession,
      };
  }
  return state;
};

const reducers = {
  user: userReducer,
};

export default combineReducers(reducers);
