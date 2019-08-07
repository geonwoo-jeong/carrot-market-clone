import styled from "styled-components";
import InputBox from "@components/molecules/InputBox";

const Container = styled.div``;

const Signup = () => {
  return (
    <Container>
      <InputBox name="user-id" placeholder="User Id"></InputBox>
    </Container>
  );
};

export default Signup;
