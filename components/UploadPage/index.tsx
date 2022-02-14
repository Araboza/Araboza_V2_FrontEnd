import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import * as S from "./styles";
import produce from "immer";

const ReactQuill = dynamic(() => import("./Editor"), { ssr: false });

interface TagI {
  tags: string[];
  tagValue: string;
}

function UploadPage() {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [tag, setTag] = useState<TagI>({ tagValue: "", tags: [] });

  const onSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    setTag(
      produce(tag, (draft) => {
        draft.tags.push(draft.tagValue);
        draft.tagValue = "";
      })
    );
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "tag":
        setTag({
          ...tag,
          tagValue: e.target.value,
        });

      case "title":
        setTitle(e.target.value);
    }
  };

  const onClick = () => {
    router.push("/");
  };

  return (
    <S.UploadWrapper>
      <S.TitleInput
        id="title"
        value={title}
        onChange={onChange}
        placeholder="제목을 입력하세요"
      />
      <S.TagWrapper onSubmit={onSubmit}>
        <S.TagInput
          id="tag"
          value={tag.tagValue}
          onChange={onChange}
          placeholder="태그 입력"
        />
      </S.TagWrapper>
      <ReactQuill value={value} onChange={setValue} />
      <S.Footer>
        <S.SubmitButton onClick={onClick}>올리기</S.SubmitButton>
      </S.Footer>
    </S.UploadWrapper>
  );
}

export default UploadPage;
