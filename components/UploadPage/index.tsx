import * as S from "./styles";

function UploadPage() {
  return (
    <S.UploadWrapper>
      <S.TitleInput placeholder="제목을 입력하세요" />
      <S.TagWrapper>
        <S.TagInput placeholder="태그 입력" />
      </S.TagWrapper>
    </S.UploadWrapper>
  );
}

export default UploadPage;
