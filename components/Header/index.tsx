/* eslint-disable @next/next/link-passhref */
import { useRouter } from "next/router";
import Link from "next/link";
import { MdNotificationsNone } from "react-icons/md";
import * as S from "./styles";
import * as SVG from "../../SVG";

function Header() {
  const router = useRouter();
  console.log(router.route);
  return (
    <S.HeaderWrapper>
      <S.HeaderSize>
        <SVG.Logo />
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
          <MdNotificationsNone size="2rem" />
          <S.UserImg src="https://bit.ly/3sivFA3" />
        </S.Status>
      </S.HeaderSize>
    </S.HeaderWrapper>
  );
}

export default Header;
