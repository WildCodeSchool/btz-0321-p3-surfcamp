export interface AppState {
  user: UserState;
}
export interface AppInitialState {
  user: UserState;
}
export interface AppPreLoadedState {
  user: UserState;
}

export interface UserState {
  firstname: string;
}

export const SET_USER = "SET_USER";
