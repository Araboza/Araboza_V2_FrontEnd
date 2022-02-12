import styled from "@emotion/styled";

export const DetailPageWrapper = styled.div`
  max-width: 80rem;
  width: 80%;
  margin: 6rem auto 10px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

export const PostInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
`;

export const Tag = styled.span`
  margin-right: 10px;
  color: #485460;
`;

export const CoverImg = styled.img`
  object-fit: cover;
  max-width: 100%;
  max-height: 100vh;
  margin: 0 auto;
  display: block;
`;

export const Contents = styled.div`
  padding: 20px 0 100px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: #ecf2f0;
  border-radius: 10px;
  margin-bottom: 50px;
`;

export const UserInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
`;

export const UserName = styled.h2`
  margin: 0;
`;

export const UserIntroduce = styled.p`
  margin: 0;
`;

export const Like = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  cursor: pointer;

  svg {
    color: red;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 10px;
  gap: 5px;
  cursor: pointer;

  :hover {
  }
`;
