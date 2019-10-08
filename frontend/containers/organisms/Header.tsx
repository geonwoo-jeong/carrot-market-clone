import styled from "styled-components";
import Link from "next/link";
import { useSelector } from "react-redux";
import { userSelector } from "@store/user";
import { Routes } from "@constants/Routes";

const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 7fr 2fr;
  background-color: var(--headerBackgroundColor);
  height: 60px;
  margin-bottom: 20px;
  align-items: center;
  filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25));
`;

const Left = styled.div``;
const Middle = styled.div``;
const Right = styled.div``;

const Header = () => {
  const { me } = useSelector(userSelector);

  return (
    <Container>
      <Left>
        <Link href="/">
          <a>Logo</a>
        </Link>
      </Left>
      <Middle></Middle>
      <Right>
        {me ? (
          <Link href={Routes.Logout}>
            <a>Logout</a>
          </Link>
        ) : (
          <Link href={Routes.Login}>
            <a>Login</a>
          </Link>
        )}
      </Right>
    </Container>
  );
};

export default Header;
