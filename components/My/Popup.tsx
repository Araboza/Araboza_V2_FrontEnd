import { useState, ChangeEvent, FormEvent } from "react";
import { IoClose } from "react-icons/io5";
import produce from "immer";

import * as S from "./styles";

interface valueType {
  id: string;
  introduce: string;
  major: string[];
  tag: string;
}

function Popup() {
  const [value, setValue] = useState<valueType>({
    id: "",
    introduce: "",
    major: [],
    tag: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue({
      ...value,
      [e.target.id]: e.target.value,
    });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue(
      produce(value, (draft) => {
        const value = draft.tag.replaceAll(" ", "");
        if (draft.major.findIndex((i) => i === value) !== -1 || value === "")
          return;
        draft.major.push(value);
        draft.tag = "";
      })
    );
  };

  const onDoubleClick = (e: any) => {
    const tag = e.target.innerText.slice(2);
    setValue(
      produce(value, (draft) => {
        draft.major = draft.major.filter((i) => i !== tag);
      })
    );
  };

  return (
    <>
      <S.PopupWrapper>
        <S.CloseWrapper>
          <IoClose size="2rem" />
        </S.CloseWrapper>
        <S.Input
          onChange={onChange}
          id="id"
          placeholder="Id 입력 (10자 이내)"
        />
        <S.Input
          onChange={onChange}
          id="introduce"
          placeholder="소개 입력 (20자 이내)"
        />
        <S.Tags onSubmit={onSubmit}>
          {value?.major.map((major) => (
            <S.Tag
              onDoubleClick={onDoubleClick}
              key={major}
            >{`# ${major}`}</S.Tag>
          ))}
          {value.major.length < 10 && (
            <S.TagInput
              onChange={onChange}
              id="tag"
              placeholder="전공 입력 (10개 이내)"
              value={value.tag}
            />
          )}
        </S.Tags>
        <S.SubmitWrapper>
          <S.SubmitButton>변경</S.SubmitButton>
        </S.SubmitWrapper>
      </S.PopupWrapper>
      <S.Background />
    </>
  );
}

export default Popup;
