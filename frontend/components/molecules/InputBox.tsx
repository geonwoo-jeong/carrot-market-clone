import styled from "styled-components";
import LabelComponent from "../atoms/Label";
import InputComponent from "../atoms/Input";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputBox = props => {
  console.log(props);
  return (
    <InputContainer>
      <LabelComponent />
      <InputComponent />
    </InputContainer>
  );
};

export default InputBox;
