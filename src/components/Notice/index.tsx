import { useDispatch } from "react-redux";
import { isCloseNotice } from "../../modules/notice";
import * as S from "./styles";

function Notice() {
  const dispatch = useDispatch();
  return (
    <>
      <S.NoticeWrapper>
        <S.Title>알림</S.Title>
      </S.NoticeWrapper>
      <S.Background onClick={() => dispatch(isCloseNotice())} />
    </>
  );
}

export default Notice;
