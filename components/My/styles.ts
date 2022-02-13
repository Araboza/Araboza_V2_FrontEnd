import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const MyWrapper = styled.div`
  width: 1310px;
  margin: 6rem auto 0;

  @media (max-width: 1320px) {
    width: 980px;
  }

  @media (max-width: 1000px) {
    width: 650px;
  }

  @media (max-width: 680px) {
    width: 80%;
  }
`;

export const Introduce = styled.div`
  background: #f1f2f6;
  border-radius: 10px;
  padding: 20px 50px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 680px) {
    padding: 10px;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Contents = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 680px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const UserImg = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  margin-right: 4rem;

  @media (max-width: 680px) {
    margin: 0;
  }
`;

export const UsreId = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem;

  @media (max-width: 680px) {
    text-align: center;
  }
`;

export const UserIntroduce = styled.p`
  margin: 0 0 0.2rem;
  font-size: 1.1rem;

  @media (max-width: 680px) {
    text-align: center;
  }
`;

export const UserMajors = styled.div`
  @media (max-width: 680px) {
    text-align: center;
  }
`;

export const UserMajor = styled.span`
  margin-right: 0.5rem;
`;

export const EditButton = styled.button`
  border: none;
  background: #222f3e;
  color: #fff;
  font-weight: bold;
  outline: none;
  padding: 5px 20px;
  border-radius: 50px;
  cursor: pointer;

  @media (max-width: 680px) {
    margin-top: 20px;
  }
`;

// Popup.tsx

const opacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const PopupWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  background: #fff;
  z-index: 100;
  padding: 20px;
  border-radius: 20px;
  animation-name: ${opacity};
  animation-duration: 0.2s;
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 1rem;

  svg {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  outline: none;
  width: 100%;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  background: #dfe6e9;
  padding: 7px 20px;
  border-radius: 30px;
  font-family: inherit;
  margin-bottom: 20px;
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export const Tag = styled.span`
  font-size: 1rem;
  font-family: inherit;
  margin-right: 10px;
`;

export const TagInput = styled.input`
  outline: none;
  border: none;
  font-size: 1rem;
  font-family: inherit;
`;

export const SubmitWrapper = styled.div`
  display: flex;
  justify-content: right;
`;

export const SubmitButton = styled.button`
  font-family: inherit;
  border: none;
  font-size: 1.3rem;
  font-weight: bold;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: 1s;

  :hover {
    background: #b2bec3;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);

  animation-name: ${opacity};
  animation-duration: 0.2s;
`;
