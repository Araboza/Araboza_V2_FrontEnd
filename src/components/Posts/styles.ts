import styled from "@emotion/styled";

export const PostsWrapper = styled.div`
  width: 1310px;
  margin: 6rem auto 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

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

export const PostCardWrapper = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #e8e8e8;
  transition: 0.2s;

  @media (max-width: 680px) {
    width: 100%;
  }

  @media (min-width: 680px) {
    :hover {
      transform: translateY(-20px);
      box-shadow: 0 20px 10px rgba(0, 0, 0, 0.3);
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
  cursor: pointer;
`;

export const Context = styled.div`
  padding: 10px;
  cursor: pointer;
`;

export const Title = styled.h3`
  margin: 0 0 5px;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 20px;
`;

export const UserInfo = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const UserImg = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: cover;
  border-radius: 100%;
  margin-right: 10px;
`;

export const LikeInfo = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    ${(props: { liked: boolean }) => props.liked && "color: red;"}
  }
`;

export const LikeCounter = styled.p`
  margin-left: 5px;
  font-size: 0.9rem;
`;
