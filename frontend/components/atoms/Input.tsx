import styled from "styled-components";

const Input = styled.input.attrs({
  type: "text",
})`
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
  height: 2.5rem;
  background-color: #74b9ff;
  padding: 10px;
  font-size: 1.2rem;
  text-rendering: optimizeLegibility;
  color: #515a5f;
  font-weight: 200;
  transition: all 0.15s ease-in-out;
`;

const InputComponent = ({ ...props }) => <Input {...props} />;

export default InputComponent;
