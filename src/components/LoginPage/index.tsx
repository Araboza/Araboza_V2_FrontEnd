import * as S from "./styles";
import * as SVG from "../../SVG";
import { BiUser, BiLockAlt, BiLock } from "react-icons/bi";

interface LoginPageProps {
  type: "sign in" | "sign up";
}

function LoginPage({ type }: LoginPageProps) {
  return (
    <S.LoginPageWrapper>
      <S.LoginForm>
        <S.Logo>
          <SVG.Logo />
        </S.Logo>
        <S.Inputs>
          <S.InputWrapper>
            <S.SvgWrapper>
              <BiUser size="1.5rem" />
            </S.SvgWrapper>
            <S.Input placeholder="Type your Id" />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.SvgWrapper>
              <BiLockAlt size="1.5rem" />
            </S.SvgWrapper>
            <S.Input placeholder="Type your Password" type="password" />
          </S.InputWrapper>

          {type === "sign up" && (
            <S.InputWrapper>
              <S.SvgWrapper>
                <BiLock size="1.5rem" />
              </S.SvgWrapper>
              <S.Input placeholder="Confirm Password" type="password" />
            </S.InputWrapper>
          )}
        </S.Inputs>
        <S.SubmitButton>{type.toUpperCase()}</S.SubmitButton>
      </S.LoginForm>
    </S.LoginPageWrapper>
  );
}

export default LoginPage;
