import styled from "styled-components";
import { ReactNode, ReactElement } from "react";

type Props = {
  children?: ReactNode;
};

const Wrapper = styled.h1`
  text-align: center;
  align-self: start;
  font-size: 1.5rem;
  font-weight: 400;
`;

const Title = (props: Props): ReactElement => (
  <Wrapper>{props.children}</Wrapper>
);

Title.defaultProps = {
  children: "",
};

export default Title;
