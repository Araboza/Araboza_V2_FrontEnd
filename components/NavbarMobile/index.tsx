import * as S from "./styles";

function NavbarMobile() {
  return (
    <>
      <S.NavbarMobileWrapper>
        <S.Item>Home</S.Item>
        <S.Item>Upload</S.Item>
        <S.Item className="end">MyPage</S.Item>
      </S.NavbarMobileWrapper>
      <S.Background />
    </>
  );
}

export default NavbarMobile;
