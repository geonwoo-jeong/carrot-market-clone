import { IUserState, UserInitialState } from "./user/states";

export interface IInitialState {
  user: Readonly<IUserState>;
}

export const InitialState: IInitialState = {
  user: UserInitialState,
};
