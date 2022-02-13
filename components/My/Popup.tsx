import { IoClose } from "react-icons/io5";

import * as S from "./styles";

function Popup() {
  return (
    <>
      <S.PopupWrapper>
        <S.CloseWrapper>
          <IoClose size="2rem" />
        </S.CloseWrapper>
        <S.Input placeholder="Id 입력 (10자 이내)" />
        <S.Input placeholder="소개 입력 (20자 이내)" />
        <S.Tags>
          <S.Tag># FE</S.Tag>
          <S.TagInput placeholder="전공 입력 (10개 이내)" />
        </S.Tags>
      </S.PopupWrapper>
      <S.Background />
    </>
  );
}

export default Popup;
