import styled from "@emotion/styled";

export const UploadWrapper = styled.div`
  max-width: 80rem;
  width: 80%;
  margin: 6rem auto 10px;
`;

export const TitleInput = styled.input`
  font-size: 3rem;
  border: none;
  outline: none;
  margin: 1rem 0;
  padding: 0 10px;
  width: 100%;
  font-family: inherit;
  font-weight: bold;
  border-bottom: 1px solid #e2e2e2;
  text-align: center;

  ::placeholder {
    font-family: inherit;
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TagInput = styled.input`
  outline: none;
  font-family: inherit;
  border: none;
  font-size: 1rem;
  text-align: center;
`;
