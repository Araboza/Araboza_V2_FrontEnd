import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const opacity = keyframes`
  to {
    opacity: 1;
  }
  from {
    opacity: 0;
  }
`;

const sliding = keyframes`
  to {
    top: 4rem;
  }
  from {
    top: -4rem;
  }
`;

export const NavbarMobileWrapper = styled.ul`
  position: fixed;
  top: 4rem;
  left: 0;
  background: #fff;
  width: 100%;
  z-index: 80;
  margin: 0;
  list-style: none;
  padding: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  animation-name: ${sliding};
  animation-duration: 0.2s;
`;

export const Item = styled.li`
  padding: 10px 0 10px 3rem;

  ${(props: { bold?: boolean }) => props.bold && "font-weight: bold;"}

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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;

  animation-name: ${opacity};
  animation-duration: 0.2s;
`;
