import { combineReducers } from "redux"
import { IInitialState } from "./states"
import userReducers from "./user/reducers"

export const combinedReducers = combineReducers<IInitialState>({
  user: userReducers,
})
