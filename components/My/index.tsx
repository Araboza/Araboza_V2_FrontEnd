import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules";
import { isShowPopup } from "../../modules/editPopup";
import { UserType } from "../../types";
import Popup from "./Popup";
import * as S from "./styles";

interface MyType {
  user: UserType;
}

function My({ user }: MyType) {
  const { editPopup } = useSelector((state: RootState) => ({
    editPopup: state.editPopup,
  }));
  const dispatch = useDispatch();

  return (
    <>
      <S.MyWrapper>
        <S.Introduce>
          <S.Contents>
            <S.UserImg src={user.img} />
            <div>
              <S.UsreId>{user.id}</S.UsreId>
              <S.UserIntroduce>{user.introduce}</S.UserIntroduce>
              <S.UserMajors>
                {user.major.map((major) => (
                  <S.UserMajor key={major}>#{major}</S.UserMajor>
                ))}
              </S.UserMajors>
            </div>
          </S.Contents>
          {/* user를 확인해서 띄울지 안 띄울지 정해야 함 */}
          <S.EditButton onClick={() => dispatch(isShowPopup())}>
            편집
          </S.EditButton>
        </S.Introduce>
      </S.MyWrapper>
      {editPopup && <Popup />}
    </>
  );
}

export default My;
