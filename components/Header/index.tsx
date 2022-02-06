/* eslint-disable @next/next/link-passhref */
import { useRouter } from "next/router";
import Link from "next/link";
import { IoMdNotificationsOutline } from "react-icons/io";
import * as S from "./styles";
import * as SVG from "../../SVG";
import Notice from "../Notice";

function Header() {
  const router = useRouter();

  return (
    <S.HeaderWrapper>
      <S.HeaderSize>
        <Link href="/">
          <S.Logo>
            <SVG.Logo />
          </S.Logo>
        </Link>
        <S.Navbar>
          <Link href="/">
            <S.NavLink isBottom={router.route === "/"}>Home</S.NavLink>
          </Link>
          <Link href="/upload">
            <S.NavLink isBottom={router.route === "/upload"}>Upload</S.NavLink>
          </Link>
          <Link href="/my">
            <S.NavLink isBottom={router.route === "my"}>MyPage</S.NavLink>
          </Link>
        </S.Navbar>
        <S.Status>
          <S.Notice>
            <IoMdNotificationsOutline className="notice" size="1.7rem" />
          </S.Notice>
          <S.UserImg src="https://bit.ly/3sivFA3" />
        </S.Status>
        <Notice />
      </S.HeaderSize>
    </S.HeaderWrapper>
  );
}

export default Header;
