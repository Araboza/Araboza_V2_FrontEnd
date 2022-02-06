import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  height: 4rem;
  width: 100%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  position: fixed;
`;

export const HeaderSize = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  position: relative;

  @media (min-width: 1250px) {
    width: 1250px;
    padding: 0;
  }
`;

export const Logo = styled.a`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 2rem;
  font-size: 1.2rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const NavLink = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  cursor: pointer;
  transition: 0.2s;
  color: rgba(0, 0, 0, 0.5);
  ${(props: { isBottom: boolean }) =>
    props.isBottom &&
    `border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    color: #000;
    :hover {
      border-bottom: 1px solid #000;
    }`};

  :hover {
    color: #000;
  }
`;

export const Status = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Notice = styled.div`
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: #f1f1f1;
  }
`;

export const UserImg = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 100%;
  object-fit: cover;
  cursor: pointer;
`;
