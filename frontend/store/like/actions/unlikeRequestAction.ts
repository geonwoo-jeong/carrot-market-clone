import { UNLIKE_REQUEST } from "@store/like/types";

const unlikeRequestAction = (id: string) => ({
  type: UNLIKE_REQUEST,
  payload: {
    id,
  },
});

export type unlikeRequestAction = ReturnType<typeof unlikeRequestAction>;

export default unlikeRequestAction;
