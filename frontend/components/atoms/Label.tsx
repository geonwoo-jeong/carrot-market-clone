import styled from "styled-components";

const Wrapper = styled.label`
  font-size: 1.2rem;
  text-rendering: optimizeLegibility;
`;

const Label = ({ ...props }) => {
  console.log(props);
  return <Wrapper {...props} />;
};
export default Label;
