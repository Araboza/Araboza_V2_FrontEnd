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
