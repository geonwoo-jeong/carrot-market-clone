// Log in
export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

interface LogInRequestAction {
  type: typeof LOG_IN_REQUEST;
}
interface LogInSuccessAction {
  type: typeof LOG_IN_SUCCESS;
}
interface LogInFailureAction {
  type: typeof LOG_IN_FAILURE;
}

// Log out
export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

interface LogOutRequestAction {
  type: typeof LOG_OUT_REQUEST;
}
interface LogOutSuccessAction {
  type: typeof LOG_OUT_SUCCESS;
}
interface LogOutFailureAction {
  type: typeof LOG_OUT_FAILURE;
}

export type UserActionTypes =
  | LogInRequestAction
  | LogInSuccessAction
  | LogInFailureAction
  | LogOutRequestAction
  | LogOutSuccessAction
  | LogOutFailureAction;
