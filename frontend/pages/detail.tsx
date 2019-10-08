import styled from "styled-components";
import { NextPage } from "next";

const Container = styled.section`
  display: grid;
  grid-auto-columns: auto;
  justify-content: center;
  align-items: center;
  width: 50vw;
`;
const ImageContainer = styled.div``;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const UserInfomation = styled.div`
  display: grid;
  grid-template-columns: 50px 6fr 3fr;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  padding: 10px 0;
`;
const Avatar = styled.div`
  display: grid;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: orange;
`;
const UserNameAndLocation = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 5px;
`;
const UserName = styled.span`
  font-weight: 600;
`;
const UserLocation = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
`;
const Manners = styled.div`
  display: grid;
  justify-content: end;
`;

const ItemInformation = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 10px;
`;
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;
const Category = styled.div`
  font-size: 0.8rem;
`;
const Price = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
`;
const Description = styled.div`
  margin: 10px 0;
`;
const UserActions = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const Likes = styled.span``;
const Chats = styled.span``;
const Comments = styled.span``;
const Views = styled.span``;

const Detail: NextPage = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src="https://images.containerstore.com/catalogimages/348668/1007638g-ledge-shelf-white.jpg?width=1200&height=1200&align=center" />
      </ImageContainer>
      <UserInfomation>
        <Avatar>A</Avatar>
        <UserNameAndLocation>
          <UserName>Tanaka</UserName>
          <UserLocation>Soka-shi</UserLocation>
        </UserNameAndLocation>
        <Manners>37.8</Manners>
      </UserInfomation>
      <ItemInformation>
        <Title>Title.....</Title>
        <Category>Food / Ramen</Category>
        <Price>20,000 Yen</Price>
        <Description>Very Good Ramen</Description>
        <UserActions>
          <Likes>Likes 22</Likes>
          <Chats>Chats 33</Chats>
          <Comments>Comments 13</Comments>
          <Views>Views 555</Views>
        </UserActions>
      </ItemInformation>
    </Container>
  );
};

export default Detail;
