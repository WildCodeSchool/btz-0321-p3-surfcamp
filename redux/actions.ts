import { Dispatch } from "react";
import * as types from "./types";

export const isLogin =
  (user: types.AppState) =>
  (dispatch: Dispatch<{ type: string; payload: types.AppState }>) => {
    return dispatch({
      type: types.SESSION_LOGIN,
      payload: {
        email: user.email,
        role: user.role,
        startSession: new Date(),
        id: user.id,
      },
    });
  };
