export interface AppState {
  id: string;
  email: string;
  role: string;
  startSession?: Date;
  picture: string;
  firstname: string;
}
export interface AppInitialState {
  id: string;
  email: string;
  role: string;
  startSession?: Date;
  picture: string;
  firstname: string;
}
export interface AppPreLoadedState {
  id: string;
  email: string;
  role: string;
  startSession?: Date;
  picture: string;
  firstname: string;
}

export interface RootState {
  user: AppState;
}

export const SESSION_LOGIN = "SESSION_LOGIN";
