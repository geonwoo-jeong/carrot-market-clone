import styled from "styled-components";
import SocialButtons from "../containers/SocialButtons";
import { useInput } from "../utils/hooks/useInput";
import { useDispatch } from "react-redux";
import { loginRequestAction } from "../store/user/actions";

const Container = styled.div`
  display: grid;
  grid-auto-rows: 2fr 5fr 1fr 1fr;
  grid-auto-columns: 1fr;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  width: 50vw;
  color: #515a5f;
  background-color: white;
  border-radius: 5px;
`;

const LoginForm = styled.form`
  display: grid;
  grid-auto-rows: 1fr;
  grid-auto-columns: 1fr;
  grid-gap: 10px;
`;

const Title = styled.div`
  text-align: center;
  align-self: start;
  font-size: 1.5rem;
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
  align-self: start;
  margin: 0 auto;
`;

const Label = styled.label`
  font-size: 1.2rem;
  text-rendering: optimizeLegibility;
`;
const Input = styled.input`
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
  height: 2.5rem;
  background-color: #74b9ff;
  padding: 10px;
  font-size: 1.2rem;
  text-rendering: optimizeLegibility;
  color: #515a5f;
  font-weight: 200;
  transition: all 0.15s ease-in-out;
`;

const Login = () => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useInput();
  const [userPassword, setUserPassword] = useInput();

  const onSubmitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(loginRequestAction);
  };

  return (
    <Container>
      <Title>Log in to Carrot Market</Title>
      <LoginForm onSubmit={onSubmitForm}>
        <InputContainer>
          <Label htmlFor="user-id">Email Address</Label>
          <Input
            name="user-id"
            type="text"
            value={userId}
            onChange={setUserId}
            required
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="user-password">Password</Label>
          <Input
            name="user-password"
            type="password"
            value={userPassword}
            onChange={setUserPassword}
            required
          />
        </InputContainer>
        <LoginButton type="submit">Log in</LoginButton>
      </LoginForm>
      <ForgotButton>Forgot Password?</ForgotButton>
      <SocialButtons />
    </Container>
  );
};

export default Login;
