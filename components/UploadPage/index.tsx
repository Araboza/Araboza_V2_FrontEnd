import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { ToastContainer, toast } from "react-toastify";
import { alert } from "../../lib/alert";

import "react-toastify/dist/ReactToastify.css";
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
        const value = draft.tagValue.replaceAll(" ", "");
        if (draft.tags.findIndex((i) => i === value) !== -1 || value === "")
          return;
        draft.tags.push(value);
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
        break;

      case "title":
        setTitle(e.target.value);
    }
  };

  const onClick = () => {
    if (!title.replaceAll(" ", "")) alert("제목을 입력해주세요!");
    else if (!value.replaceAll(" ", "")) alert("내용을 입력해주세요!");
    else router.push("/");
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
        <div>
          {tag.tags.map((tag) => (
            <S.Tag key={tag}># {tag}</S.Tag>
          ))}
        </div>
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
      <ToastContainer />
    </S.UploadWrapper>
  );
}

export default UploadPage;
