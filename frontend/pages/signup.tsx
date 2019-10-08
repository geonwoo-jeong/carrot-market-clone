import styled from "styled-components";
import InputBox from "@components/molecules/InputBox";
import { NextPage } from "next";

const Container = styled.div``;

const Signup: NextPage = () => {
  return (
    <Container>
      <InputBox name="user-id" placeholder="User Id"></InputBox>
    </Container>
  );
};

export default Signup;
