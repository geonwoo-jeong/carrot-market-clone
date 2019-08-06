import { UserInitialState } from ".";
import produce from "immer";
import { UserActionTypes, LOG_IN_REQUEST, LOG_IN_SUCCESS } from "./types";
import { User } from "./states";

const dummyUser: User = {
  email: "geonwoo.jeong@gmail.com",
  firstName: "Geonwoo",
  lastName: "Jeong",
  nickName: "Jeong",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const userReducers = (state = UserInitialState, action: UserActionTypes) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.isLoggingIn = true;
        draft.logInErrorReason = "";
        break;
      case LOG_IN_SUCCESS:
        draft.isLoggingIn = false;
        draft.logInErrorReason = "";
        draft.me = dummyUser;
        break;
      default:
        break;
    }
  });
};

export default userReducers;
