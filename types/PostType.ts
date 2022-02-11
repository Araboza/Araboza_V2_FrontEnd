import { UserType } from "./UserType";

export interface PostType {
  title: string;
  contents: string;
  img: string;
  like: boolean;
  likeNum: number;
  tags: Array<string>;
  createdAt: Date;
  user: UserType;
}
