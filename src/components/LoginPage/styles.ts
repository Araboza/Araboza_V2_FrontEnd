import styled from "@emotion/styled";

export const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #dfe6e9, #636e72);
`;

export const LoginForm = styled.form`
  width: 35rem;
  height: 40rem;
  background: #ffff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 35rem) {
    width: 90%;
  }

  @media (max-height: 40rem) {
    height: 90vh;
  }
`;

export const Logo = styled.a`
  height: 6rem;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  width: 100%;
  cursor: pointer;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SvgWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: #757575;
  }
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: 2px solid #afafaf;
  font-size: 1rem;
  font-family: inherit;
  padding: 10px 15px 10px 50px;
  border-radius: 15px;

  ::placeholder {
    color: #aaaa;
  }
`;

export const ChangeType = styled.a`
  display: flex;
  justify-content: right;
  padding: 0 20px;
  cursor: pointer;
  font-size: 1rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px 0;
  font-size: 1rem;
  font-family: inherit;
  font-weight: bold;
  background-color: #2d3436;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s;

  :hover {
    background-color: #636e72;
  }
`;
