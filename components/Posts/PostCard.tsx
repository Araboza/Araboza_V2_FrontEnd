import * as S from "./styles";
import { PostType, UserType } from "../../types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface PostI extends PostType {
  user: UserType;
}

interface PostCardProps {
  post: PostI;
}

function PostCard({ post }: PostCardProps) {
  return (
    <S.PostCardWrapper>
      <S.Image src={post.img} alt="introImage" />
      <S.Context>
        <div>
          <S.Title>{post.title}</S.Title>
          <S.Description>{post.contents}</S.Description>
        </div>
      </S.Context>
      <S.Info>
        <S.UserInfo>
          <S.UserImg src="https://bit.ly/35VUeLy" />
          <h4>{post.user.id}</h4>
        </S.UserInfo>
        <S.LikeInfo liked={post.like}>
          {post.like ? (
            <AiFillHeart size="1.5rem" />
          ) : (
            <AiOutlineHeart size="1.5rem" />
          )}
          <S.LikeCounter>{post.likeNum}</S.LikeCounter>
        </S.LikeInfo>
      </S.Info>
    </S.PostCardWrapper>
  );
}

export default PostCard;
