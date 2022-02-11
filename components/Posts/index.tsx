import * as S from "./styles";
import { PostType } from "../../types";
import PostCard from "./PostCard";

interface PostsProps {
  posts: PostType[];
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
