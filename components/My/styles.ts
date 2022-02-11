import styled from "@emotion/styled";

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
