import * as S from "./styles";
import { PostType } from "../../types";

interface PostCardProps {
  post: PostType;
}

function PostCard({ post }: PostCardProps) {
  return <S.PostCardWrapper></S.PostCardWrapper>;
}

export default PostCard;
