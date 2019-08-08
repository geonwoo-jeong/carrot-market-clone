import { Chat } from "@store/chat/states";

export type Message = {
  id: number;
  text: string;
  chatId: string;
  Chat: Chat;
};
