export type Like = {
  id: number;
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
