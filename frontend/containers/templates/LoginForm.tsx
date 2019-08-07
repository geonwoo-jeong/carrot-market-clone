import styled from "styled-components";
import SocialButtons from "@components/molecules/SocialButtons";
import useInput from "@utils/hooks/useInput";
import { useDispatch } from "react-redux";
import loginRequestAction from "@store/user/actions";
import { useCallback } from "react";
import Title from "@components/atoms/Title";
import Button from "@components/atoms/Button";

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

const Form = styled.form`
  display: grid;
  grid-auto-rows: 1fr;
  grid-auto-columns: 1fr;
  grid-gap: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const LoginForm = () => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useInput();
  const [userPassword, setUserPassword] = useInput();

  const onSubmitForm = useCallback((event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(loginRequestAction(userId, userPassword));
  }, []);

  return (
    <Container>
      <Title>Log in to Carrot Market</Title>
      <Form onSubmit={onSubmitForm}>
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
        <Button type="submit">Log in</Button>
      </Form>
      <ForgotButton>Forgot Password?</ForgotButton>
      <SocialButtons />
    </Container>
  );
};

export default LoginForm;
