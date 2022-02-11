/* eslint-disable @next/next/link-passhref */
import { useRouter } from "next/router";
import Link from "next/link";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import * as S from "./styles";
import * as SVG from "../../SVG";
import Notice from "../Notice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules";
import { isCloseNotice, isNotice } from "../../modules/notice";
import {
  isCloseNavbar,
  isShowNavbar,
  isToggleNavbar,
} from "../../modules/mobileNavbar";
import NavbarMobile from "../NavbarMobile";

function Header() {
  const { showNotice, showNavbar } = useSelector((state: RootState) => ({
    showNotice: state.notice.showNotice,
    showNavbar: state.mobileNavbar,
  }));
  const dispatch = useDispatch();
  const router = useRouter();

  const onClick = () => {
    dispatch(isCloseNavbar());
    if (showNotice) {
      dispatch(isCloseNotice());
      return;
    }
    dispatch(isNotice());
  };

  return (
    <>
      <S.HeaderWrapper>
        <S.HeaderSize>
          <Link href="/">
            <S.Logo onClick={() => dispatch(isCloseNavbar())}>
              <SVG.Logo />
            </S.Logo>
          </Link>
          <S.Navbar>
            <Link href="/">
              <S.NavLink isBottom={router.route === "/"}>Home</S.NavLink>
            </Link>
            <Link href="/upload">
              <S.NavLink isBottom={router.route === "upload"}>Upload</S.NavLink>
            </Link>
            <Link href="/my">
              <S.NavLink isBottom={router.route === "my"}>MyPage</S.NavLink>
            </Link>
          </S.Navbar>
          <S.Status>
            <S.CircleBackground as="div" onClick={onClick}>
              <IoMdNotificationsOutline size="1.7rem" />
            </S.CircleBackground>
            <S.CircleBackground
              className="github"
              target="_blank"
              href="https://github.com/Araboza"
            >
              <BsGithub size="1.7rem" />
            </S.CircleBackground>
            <S.UserImg
              onClick={() => {
                if (document.documentElement.clientWidth <= 680)
                  dispatch(isToggleNavbar());
              }}
              src="https://bit.ly/3sivFA3"
            />
          </S.Status>
          {showNotice && <Notice />}
        </S.HeaderSize>
      </S.HeaderWrapper>
      {showNavbar && <NavbarMobile />}
    </>
  );
}

export default Header;
