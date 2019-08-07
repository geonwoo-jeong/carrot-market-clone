import { LOG_IN_REQUEST } from "@store/user/types";

const loginRequestAction = (id: string, password: string) => ({
  type: LOG_IN_REQUEST,
  payload: {
    id,
    password,
  },
});

export type loginRequestAction = ReturnType<typeof loginRequestAction>;

export default loginRequestAction;
