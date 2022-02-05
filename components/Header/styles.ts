import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  height: 4rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
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
  ${(props: { isBottom: boolean }) =>
    props.isBottom &&
    `border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    :hover {
      border-bottom: 1px solid #000;
    }`}
`;

export const Status = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const UserImg = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 100%;
  object-fit: cover;
`;
