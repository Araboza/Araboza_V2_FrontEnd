import * as S from "./styles";
import { PostType } from "../../types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface PostCardProps {
  post: PostType;
}

function PostCard({ post }: PostCardProps) {
  return (
    <S.PostCardWrapper>
      <S.Image src={post.img} alt="introImage" />
      <S.Context>
        <div>
          <S.Title>{post.title}</S.Title>
          <S.Description>{post.description}</S.Description>
        </div>
      </S.Context>
      <S.Info>
        <S.UserInfo>
          <S.UserImg src="https://bit.ly/35VUeLy" />
          <h4>{post.user.name}</h4>
        </S.UserInfo>
        <S.LikeInfo>
          <AiOutlineHeart size="1.5rem" />
          <S.LikeCounter>0</S.LikeCounter>
        </S.LikeInfo>
      </S.Info>
    </S.PostCardWrapper>
  );
}

export default PostCard;
