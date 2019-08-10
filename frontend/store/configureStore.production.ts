import { InitialState } from "@store/states";
import { createStore, applyMiddleware } from "redux";
import { combinedReducers } from "@store/reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "@store/sagas";

export const configureStore = (initialState = InitialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(
    combinedReducers,
    initialState,
    applyMiddleware(...middlewares)
  ) as any;

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};
