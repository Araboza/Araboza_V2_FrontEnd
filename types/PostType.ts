import { UserType } from "./UserType";

export interface PostType {
  title: string;
  contents: string;
  img: string;
  like: boolean;
  likeNum: number;
  user: UserType;
}
