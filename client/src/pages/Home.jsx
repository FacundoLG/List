import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../components/Loading";
import MyError from "../components/MyError";
import Product from "../components/Product";
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
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(false);
  const [products, setProducts] = useState([1, 2]);

  const LogData = (data) => {
    console.log(data);
    //Pushear la data usando el token en el contexto del usuario y su id
  };
  useEffect(() => {
    setProducts([]);
  }, []);
  return (
    <HomeContainer>
      <ProductCreator
        create={(data) => {
          LogData(data);
        }}
      />
      <ProductList
        error={error}
        loading={loading}
        products={products}
        onError={() => <MyError />}
        onLoading={() => <Loading />}
        render={(product, index) => (
          <Product key={`${product?.name}_${index}`} data={product} />
        )}
      />
    </HomeContainer>
  );
};

export default Home;
