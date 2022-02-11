import * as S from "./styles";
import { PostType, UserType } from "../../types";
import PostCard from "./PostCard";

interface PostI extends PostType {
  user: UserType;
}

interface PostsProps {
  posts: PostI[];
}

function Posts({ posts }: PostsProps) {
  return (
    <S.PostsWrapper>
      {posts.map((post, i) => (
        <PostCard post={post} key={i} />
      ))}
    </S.PostsWrapper>
  );
}

export default Posts;
