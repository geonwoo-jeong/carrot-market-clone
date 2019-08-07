import styled from "styled-components";

const Wrapper = styled.button`
  border-radius: 25px;
  height: 2.5rem;
  width: 80%;
  margin: 0 auto;
  margin-top: 1rem;
  cursor: pointer;
`;

const Button = ({ props }) => <Wrapper {...props} />;

export default Button;
