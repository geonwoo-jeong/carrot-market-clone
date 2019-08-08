import { User } from "@store/user";
import { Image } from "@store/image/states";
import { Chat } from "@store/chat/states";
import { Category } from "@store/category/states";
import { Like } from "@store/like/states";

export type Post = {
  id: number;
  User: User;
  title: string;
  description: string;
  price: number;
  Category: Category;
  Chat: [Chat];
  Image: [Image];
  views: number;
  like: [Like];
  createdAt: Date;
  updatedAt: Date;
};
