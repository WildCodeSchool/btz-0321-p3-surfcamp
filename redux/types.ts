export interface AppState {
  email: string;
  role: string;
  startSession?: Date;
}
export interface AppInitialState {
  email: string;
  role: string;
  startSession?: Date;
}
export interface AppPreLoadedState {
  email: string;
  role: string;
  startSession?: Date;
}

export const SESSION_LOGIN = "SESSION_LOGIN";
