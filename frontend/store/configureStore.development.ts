import { InitialState } from "./states";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combinedReducers } from "./reducers";

export const configureStore = (initialState = InitialState) => {
  return createStore(
    combinedReducers,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
};
