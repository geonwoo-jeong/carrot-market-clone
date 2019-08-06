import styled from "styled-components";

const Label = styled.label`
  font-size: 1.2rem;
  text-rendering: optimizeLegibility;
`;

const LabelComponent = ({ ...props }) => <Label {...props} />;

export default LabelComponent;
