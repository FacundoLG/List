import React from "react";
import styled from "styled-components";
import ProductCreator from "../components/ProductCreator";
import ProductList from "../components/ProductList";
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  width: 70vw;
  min-width: 290px;
  max-width: 535px;
  @media (max-width: 500px) {
    width: 90vw;
  }
`;
const Home = () => {
  const LogData = (data) => {
    console.log(data);
  };
  return (
    <HomeContainer>
      <ProductCreator
        create={(data) => {
          LogData(data);
        }}
      />
      <ProductList />
    </HomeContainer>
  );
};

export default Home;
