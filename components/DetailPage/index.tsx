import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { AiFillHome } from "react-icons/ai";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Ta from "javascript-time-ago";
import ko from "javascript-time-ago/locale/ko.json";
import Link from "next/link";
import { useRouter } from "next/router";

import * as S from "./styles";

import { PostType } from "../../types";

interface DetailPageProps {
  post: PostType;
  source: MDXRemoteSerializeResult;
}

Ta.addDefaultLocale(ko);

const timeAgo = new Ta("ko");

function DetailPage({ post, source }: DetailPageProps) {
  const router = useRouter();
  return (
    <S.DetailPageWrapper>
      <S.Title>{post.title}</S.Title>
      <S.PostInfo>
        <S.Tags>
          {post.tags.map((tag) => (
            <S.Tag key={tag}>#{tag}</S.Tag>
          ))}
        </S.Tags>
        <p>{timeAgo.format(new Date(post.createdAt))}</p>
      </S.PostInfo>
      <S.CoverImg src={post.img} />
      <S.Contents>
        <MDXRemote {...source} />
      </S.Contents>
      <S.UserInfo>
        <S.UserInformation>
          <S.UserImg src={post.user.img} />
          <div>
            <Link href={`/${post.user.id}`}>
              <a>
                <S.UserName>{post.user.id}</S.UserName>
                <S.UserIntroduce>{post.user.introduce}</S.UserIntroduce>
              </a>
            </Link>
          </div>
        </S.UserInformation>
        <S.Like>
          <AiFillHeart />
          <span>{post.likeNum}</span>
        </S.Like>
      </S.UserInfo>
      <S.ButtonWrapper>
        <S.BackButton onClick={() => router.push("/")}>
          <AiFillHome />
          Home
        </S.BackButton>
      </S.ButtonWrapper>
    </S.DetailPageWrapper>
  );
}

export default DetailPage;
