import styled from "styled-components";
import Link from "next/link";

const Container = styled.article`
  border: 1px solid;
  background-color: var(--whiteBackgroundColor);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  padding: 10px;
  border-radius: 10px;
`;
const StyledLink = styled.a`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
  cursor: pointer;
`;

const Header = styled.div``;
const ImageContainer = styled.div``;
const Image = styled.img`
  border-radius: 10px;
`;

const Main = styled.div`
  display: grid;
  margin: 10px;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;
const Description = styled.div``;

const LocationAndTime = styled.div``;
const Location = styled.span``;
const Time = styled.span``;
const Price = styled.span`
  font-weight: 600;
  font-size: 1.5rem;
  color: #ff9f43;

  &::after {
    margin-left: 5px;
    content: "Yen";
  }
`;

const UserActions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const Loves = styled.span``;
const Chats = styled.span``;
const Comments = styled.span``;

const ItemCard = () => {
  return (
    <Container>
      <Link href="/detail">
        <StyledLink>
          <Header>
            <ImageContainer>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc8eeBW70megvqxW20BpYwN7BWlu-OC1xdZMqpJHo_3zedNZKe" />
            </ImageContainer>
          </Header>
          <Main>
            <Title>Title</Title>
            <Description>Description</Description>
            <LocationAndTime>
              <Location>Tokyo</Location>
              <Time>1min</Time>
            </LocationAndTime>
            <Price>2,700</Price>
            <UserActions>
              <Loves>Loves 22</Loves>
              <Chats>Chats 33</Chats>
              <Comments>Comments 13</Comments>
            </UserActions>
          </Main>
        </StyledLink>
      </Link>
    </Container>
  );
};

export default ItemCard;
