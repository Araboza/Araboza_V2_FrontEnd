import styled from "@emotion/styled";

export const NoticeWrapper = styled.div`
  position: absolute;
  width: 20rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  padding: 10px;
  top: 3.7rem;
  right: 1rem;
  z-index: 100;

  @media (max-width: 400px) {
    width: 80%;
  }
`;

export const Title = styled.h3`
  text-align: center;
  margin-top: 0;
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
