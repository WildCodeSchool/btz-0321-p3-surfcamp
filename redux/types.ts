export interface AppState {
  email: string,
  role: string,
  startSession?: Date,
}
export interface AppInitialState {
  email: string,
  password: string,
}
export interface AppPreLoadedState {
  email: string,
  password: string,
}

export const SESSION_LOGIN = "SESSION_LOGIN";
