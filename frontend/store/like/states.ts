import { Post } from "@store/post/states";
import { User } from "@store/user";

export type Like = {
  id: number;
  User: User;
  Post: Post;
  createdAt: Date;
};

export interface ILikeState {
  isLiking: boolean; // Trying like
  isUnliking: boolean; // Trying unlike
  likeErrorReason: string;
  unlikeErrorReason: string;
}

export const LikeInitialState: ILikeState = {
  isLiking: false,
  isUnliking: false,
  likeErrorReason: "",
  unlikeErrorReason: "",
};
