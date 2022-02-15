/* eslint-disable @next/next/link-passhref */
import * as S from "./styles";
import { PostType } from "../../types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";

interface PostCardProps {
  post: PostType;
}

function PostCard({ post }: PostCardProps) {
  return (
    <S.PostCardWrapper>
      <Link href={`/${post.user.id}/${post.title}`}>
        <a>
          <S.Image src={post.img} alt="introImage" />
          <S.Context>
            <div>
              <S.Title>{post.title}</S.Title>
              <S.Description>{post.contents}</S.Description>
            </div>
          </S.Context>
        </a>
      </Link>
      <S.Info>
        <Link href={`/${post.user.id}`}>
          <S.UserInfo>
            <S.UserImg src="https://bit.ly/35VUeLy" />
            <h4>{post.user.id}</h4>
          </S.UserInfo>
        </Link>
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
