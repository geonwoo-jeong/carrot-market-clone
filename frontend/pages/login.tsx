import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-auto-rows: 2fr 3fr 3fr 3fr 1fr;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  width: 50vw;
  height: 50vh;
  background-color: orange;
`;

const Title = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const LoginButton = styled.button`
  border-radius: 25px;
  height: 2.5rem;
  width: 80%;
  margin: 0 auto;
  margin-top: 1rem;
  cursor: pointer;
`;
const ForgotButton = styled.div`
  margin: 0 auto;
`;

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 600;
`;
const Input = styled.input`
  width: 100%;
  margin-top: 10px;
  height: 2.5rem;
`;

const Login = () => {
  return (
    <Container>
      <Title>Log in to Carrot Market</Title>
      <InputContainer>
        <Label>Something</Label>
        <Input type="text" />
      </InputContainer>
      <InputContainer>
        <Label>Something</Label>
        <Input type="password" />
      </InputContainer>
      <LoginButton>Log in</LoginButton>
      <ForgotButton>Forgot Password?</ForgotButton>
    </Container>
  );
};

export default Login;
