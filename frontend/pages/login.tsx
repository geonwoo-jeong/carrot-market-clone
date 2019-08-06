import styled from "styled-components";
import LoginForm from "../components/templates/LogInForm";
import { useSelector } from "react-redux";
import { userSelector } from "../store/user";
import Detail from "./detail";

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

const Login = () => {
  const { me } = useSelector(userSelector);
  return <Container>{me ? <Detail /> : <LoginForm />}</Container>;
};

export default Login;
