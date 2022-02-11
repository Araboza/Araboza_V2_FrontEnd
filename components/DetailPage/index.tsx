import unified from "unified";
import markdown from "remark-parse";
import Ta from "javascript-time-ago";

import ko from "javascript-time-ago/locale/ko.json";

import * as S from "./styles";

import { PostType } from "../../types";

interface DetailPageProps {
  post: PostType;
}

Ta.addDefaultLocale(ko);

const timeAgo = new Ta("ko");

function DetailPage({ post }: DetailPageProps) {
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
    </S.DetailPageWrapper>
  );
}

export default DetailPage;
