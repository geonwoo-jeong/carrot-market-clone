import styled from "styled-components";

const Wrapper = styled.form`
  display: grid;
  grid-auto-rows: 1fr;
  grid-auto-columns: 1fr;
  grid-gap: 10px;
`;

const Form = ({ ...props }) => <Wrapper {...props} />;

export default Form;
