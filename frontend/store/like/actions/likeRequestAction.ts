import { LIKE_REQUEST } from "@store/like/types";

const likeRequestAction = (id: string) => ({
  type: LIKE_REQUEST,
  payload: {
    id,
  },
});

export type likeRequestAction = ReturnType<typeof likeRequestAction>;

export default likeRequestAction;
