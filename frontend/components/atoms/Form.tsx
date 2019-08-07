import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

const Wrapper = styled.form`
  display: grid;
  grid-auto-rows: 1fr;
  grid-auto-columns: 1fr;
  grid-gap: 10px;
`;

const Form = (props: Props) => <Wrapper {...props}>{props.children}</Wrapper>;

export default Form;
