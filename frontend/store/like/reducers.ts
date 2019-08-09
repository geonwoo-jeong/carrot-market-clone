import { LikeInitialState } from "@store/like/states";
import {
  LikeActionTypes,
  LIKE_REQUEST,
  LIKE_SUCCESS,
  LIKE_FAILURE,
  UNLIKE_SUCCESS,
  UNLIKE_REQUEST,
  UNLIKE_FAILURE,
} from "@store/like/types";
import produce from "immer";

const likeReducers = (state = LikeInitialState, action: LikeActionTypes) => {
  return produce(state, draft => {
    switch (action.type) {
      case LIKE_REQUEST:
        draft.isLiking = false;
        draft.likeErrorReason = "";
        break;
      case LIKE_SUCCESS:
        draft.isLiking = true;
        draft.likeErrorReason = "";
        break;
      case LIKE_FAILURE:
        draft.isLiking = false;
        break;
      case UNLIKE_REQUEST:
        break;
      case UNLIKE_SUCCESS:
        break;
      case UNLIKE_FAILURE:
        break;
      default:
        break;
    }
  });
};

export default likeReducers;
