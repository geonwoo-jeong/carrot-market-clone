export const LOG_IN_REQUEST = "LOG_IN_REQUEST"
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS"
export const LOG_IN_FAILURE = "LOG_IN_FAILURE"

interface LogInRequestAction {
  type: typeof LOG_IN_REQUEST
}

interface LogInSuccessAction {
  type: typeof LOG_IN_SUCCESS
}

interface LogInFailureAction {
  type: typeof LOG_IN_FAILURE
}

export type UserActionTypes =
  | LogInRequestAction
  | LogInSuccessAction
  | LogInFailureAction
