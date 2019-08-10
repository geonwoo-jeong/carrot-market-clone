import { IUserState, UserInitialState } from "@store/user/states";
import { ILikeState, LikeInitialState } from "./like/states";

export interface IInitialState {
  user: Readonly<IUserState>;
  like: Readonly<ILikeState>;
}

export const InitialState: IInitialState = {
  user: UserInitialState,
  like: LikeInitialState,
};
