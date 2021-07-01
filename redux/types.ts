export interface AppState {
  id: string;
  email: string;
  role: string;
  startSession?: Date;
}
export interface AppInitialState {
  id: string;
  email: string;
  role: string;
  startSession?: Date;
}
export interface AppPreLoadedState {
  id: string;
  email: string;
  role: string;
  startSession?: Date;
}

export const SESSION_LOGIN = "SESSION_LOGIN";
