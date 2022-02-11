import * as S from "./styles";

import { PostType } from "../../types";

interface DetailPageProps {
  post: PostType;
}

function DetailPage({ post }: DetailPageProps) {
  return (
    <S.DetailPageWrapper>
      <S.Title>{post.title}</S.Title>
    </S.DetailPageWrapper>
  );
}

export default DetailPage;
