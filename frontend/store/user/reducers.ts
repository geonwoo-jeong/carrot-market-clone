import { UserInitialState } from ".";
import produce from "immer";
import { UserActionTypes, LOG_IN_REQUEST } from "./types";

const userReducers = (state = UserInitialState, action: UserActionTypes) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.isLoggingIn = true;
        draft.logInErrorReason = "";
        break;
    }
  });
};

export default userReducers;
