import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { isCloseNavbar } from "../../modules/mobileNavbar";
import * as S from "./styles";

function NavbarMobile() {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <S.NavbarMobileWrapper>
        <Link href="/">
          <a onClick={() => dispatch(isCloseNavbar())}>
            <S.Item bold={router.asPath === "/"}>Home</S.Item>
          </a>
        </Link>
        <Link href="/upload">
          <a onClick={() => dispatch(isCloseNavbar())}>
            <S.Item bold={router.asPath === "/upload"}>Upload</S.Item>
          </a>
        </Link>
        <Link href="/my">
          <a onClick={() => dispatch(isCloseNavbar())}>
            <S.Item bold={router.asPath === "/my"}>MyPage</S.Item>
          </a>
        </Link>
        <S.Item className="end">
          <a
            href="https://github.com/Araboza"
            target="_blank"
            rel="noreferrer"
            onClick={() => dispatch(isCloseNavbar())}
          >
            github
          </a>
        </S.Item>
      </S.NavbarMobileWrapper>
      <S.Background onClick={() => dispatch(isCloseNavbar())} />
    </>
  );
}

export default NavbarMobile;
