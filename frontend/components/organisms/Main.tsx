import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Main = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Main;
