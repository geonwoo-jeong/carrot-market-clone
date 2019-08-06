import { InitialState } from "./states";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combinedReducers } from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

export const configureStore = (initialState = InitialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(
    combinedReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
