import styled from "styled-components";
import Link from "next/link";

const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 7fr 2fr;
  background-color: var(--headerBackgroundColor);
  height: 60px;
  margin-bottom: 20px;
  align-items: center;
  filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25));
`;

const Header = () => {
  return (
    <Container>
      <Link href="/">
        <a>Header</a>
      </Link>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <Link href="/logout">
        <a>Logout</a>
      </Link>
    </Container>
  );
};

export default Header;
