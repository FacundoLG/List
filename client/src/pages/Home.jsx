import React from "react";
import styled from "styled-components";
import ProductCreator from "../components/ProductCreator";
import ProductList from "../components/ProductList";
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
`;
const Home = () => {
  return (
    <HomeContainer>
      <ProductCreator />
      <ProductList />
    </HomeContainer>
  );
};

export default Home;
