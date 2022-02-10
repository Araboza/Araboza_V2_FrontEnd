import React from "react";
import { UserType } from "../../types";
import * as S from "./styles";

interface MyType {
  user: UserType;
}

function My({ user }: MyType) {
  return (
    <S.MyWrapper>
      <S.Introduce>
        <S.Contents>
          <S.UserImg src={user.img} />
          <div>
            <S.UsreId>{user.id}</S.UsreId>
            <S.UserIntroduce>{user.introduce}</S.UserIntroduce>
            <div>
              ㅋ
              {user.major.map((major) => (
                <S.UserMajor key={major}>{major}</S.UserMajor>
              ))}
            </div>
          </div>
        </S.Contents>
        {/* user를 확인해서 띄울지 안 띄울지 정해야 함 */}
        <S.EditButton>편집</S.EditButton>
      </S.Introduce>
    </S.MyWrapper>
  );
}

export default My;
