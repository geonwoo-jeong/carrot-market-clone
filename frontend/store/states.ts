import { IUserState, UserInitialState } from "@store/user/states";

export interface IInitialState {
  user: Readonly<IUserState>;
}

export const InitialState: IInitialState = {
  user: UserInitialState,
};
