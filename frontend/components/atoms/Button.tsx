import styled from "styled-components";

type Props = {
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.SyntheticEvent) => void;
  children: React.ReactNode;
  disabled?: boolean;
};

const Wrapper = styled.button`
  border-radius: 25px;
  height: 2.5rem;
  width: 80%;
  margin: 0 auto;
  margin-top: 1rem;
  cursor: pointer;
`;

const Button = (props: Props): React.ReactElement => {
  const { type, onClick, children, disabled } = props;

  return (
    <Wrapper type={type} onClick={onClick} disabled={disabled}>
      {children}
    </Wrapper>
  );
};

Button.defaultType = {
  type: "button",
  disabled: false,
};

export default Button;
