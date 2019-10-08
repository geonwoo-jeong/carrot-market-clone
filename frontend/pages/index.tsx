import styled from "styled-components";
import ItemCard from "@components/molecules/ItemCard";
import { NextPage } from "next";

const Container = styled.section`
  display: grid;
  grid-auto-columns: auto;
  grid-gap: 10px;
  padding: 10px;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </Container>
  );
};

export default Home;
