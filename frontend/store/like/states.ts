import { Post } from "@store/post/states";
import { User } from "@store/user";

export type Like = {
  id: number;
  User: User;
  Post: Post;
  createdAt: Date;
};
