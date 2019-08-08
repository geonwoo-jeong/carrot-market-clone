import { Message } from "@store/message/states";
import { User } from "@store/user";

export type Chat = {
  id: number;
  seller: User;
  buyer: User;
  Messages: [Message];
  createdAt: Date;
};
