// Like
export const LIKE_REQUEST = "LIKE_REQUEST";
export const LIKE_SUCCESS = "LIKE_SUCCESS";
export const LIKE_FAILURE = "LIKE_FAILURE";

interface LikeRequestAction {
  type: typeof LIKE_REQUEST;
}

interface LikeSuccessAction {
  type: typeof LIKE_SUCCESS;
}

interface LikeFailureAction {
  type: typeof LIKE_FAILURE;
}

// Unlike
export const UNLIKE_REQUEST = "UNLIKE_REQUEST";
export const UNLIKE_SUCCESS = "UNLIKE_SUCCESS";
export const UNLIKE_FAILURE = "UNLIKE_FAILURE";

interface UnlikeRequestAction {
  type: typeof UNLIKE_REQUEST;
}

interface UnlikeSuccessAction {
  type: typeof UNLIKE_SUCCESS;
}

interface UnlikeFailureAction {
  type: typeof UNLIKE_FAILURE;
}

export type LikeActionTypes =
  | LikeRequestAction
  | LikeSuccessAction
  | LikeFailureAction
  | UnlikeRequestAction
  | UnlikeSuccessAction
  | UnlikeFailureAction;
