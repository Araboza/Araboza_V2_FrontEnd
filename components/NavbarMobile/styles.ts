import styled from "@emotion/styled";

export const NavbarMobileWrapper = styled.ul`
  position: absolute;
  top: 4rem;
  left: 0;
  background: #fff;
  width: 100%;
  z-index: 100;
  margin: 0;
  list-style: none;
  padding: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Item = styled.li`
  padding: 10px 0 10px 3rem;

  :active {
    background: #e9e9e9;
  }

  :not(&.end) {
    border-bottom: 0.1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
`;
