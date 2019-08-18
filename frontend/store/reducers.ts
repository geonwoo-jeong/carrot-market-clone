import { combineReducers } from "redux";
import { IInitialState } from "@store/states";
import userReducers from "@store/user/reducers";
import likeReducers from "./like/reducers";

export const combinedReducers = combineReducers<IInitialState>({
  user: userReducers,
  like: likeReducers,
});
