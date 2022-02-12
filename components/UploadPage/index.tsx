import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import * as S from "./styles";

const ReactQuill = dynamic(() => import("./Editor"), { ssr: false });

function UploadPage() {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <S.UploadWrapper>
      <S.TitleInput placeholder="제목을 입력하세요" />
      <S.TagWrapper>
        <S.TagInput placeholder="태그 입력" />
      </S.TagWrapper>
      <ReactQuill value={value} onChange={setValue} />
      <S.Footer>
        <S.SubmitButton>올리기</S.SubmitButton>
      </S.Footer>
    </S.UploadWrapper>
  );
}

export default UploadPage;
