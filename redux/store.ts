import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";
import { AppInitialState, AppPreLoadedState } from "../redux/types";
import { Store } from "redux";
let store: Store | undefined;

function initStore(initialState: AppInitialState | any) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}

export const initializeStore = (
  preloadedState: AppPreLoadedState
): Store<AppPreLoadedState> => {
  let _store = store ?? initStore(preloadedState);
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }
  if (typeof window === "undefined") return _store;
  if (!store) store = _store;
  return _store;
};
export function useStore(
  initialState: AppInitialState
): Store<AppInitialState> {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
