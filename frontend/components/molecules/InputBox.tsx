import styled from "styled-components";
import Label from "@components/atoms/Label";
import Input from "@components/atoms/Input";

// type Props = {
//   name: string;
//   placeholder: string;
// };

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputBox = props => {
  console.log(props);
  return (
    <InputContainer>
      <Label props={props} />
      <Input props={props} />
    </InputContainer>
  );
};

export default InputBox;
