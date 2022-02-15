import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { isClosePopup } from "../../modules/editPopup";
import { IoClose } from "react-icons/io5";
import produce from "immer";
import { ToastContainer } from "react-toastify";
import { alert } from "../../lib/alert";
import "react-toastify/dist/ReactToastify.css";

import * as S from "./styles";

interface valueType {
  id: string;
  introduce: string;
  major: string[];
  tag: string;
}

function Popup() {
  const dispatch = useDispatch();
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

  const onClick = async () => {
    if (!value.id.replaceAll(" ", "")) {
      alert("id를 입력해주세요!");
      return;
    }
    if (!value.introduce.replaceAll(" ", "")) {
      alert("소개 문구를 입력해주세요!");
      return;
    }
    // 유효 id 확인 요청
    if (!value.major[0]) {
      // 유효 id 확인 조건식
      alert("존재하는 id입니다");
      return;
    }

    dispatch(isClosePopup());
  };

  return (
    <>
      <S.PopupWrapper>
        <S.CloseWrapper>
          <IoClose onClick={() => dispatch(isClosePopup())} size="2rem" />
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
          <S.SubmitButton onClick={onClick}>변경</S.SubmitButton>
        </S.SubmitWrapper>
      </S.PopupWrapper>
      <S.Background onClick={() => dispatch(isClosePopup())} />
      <ToastContainer />
    </>
  );
}

export default Popup;
