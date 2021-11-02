import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user/UserContex";
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
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(false);
  const [products, setProducts] = useState([1, 2]);

  const LogData = (data) => {
    console.log(data);
    console.log(user);
    //Pushear la data usando el token en el contexto del usuario y su id
  };
  useEffect(() => {
    fetch("http://localhost:3500/products", {
      method: "GET",
      headers: { Authorization: `bearer ${user.token}` },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message.results) {
          setProducts(res.message.results);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
        onEmpty={() => <p>Create a Product for yor next shopping day</p>}
        render={(product, index) => (
          <Product key={`${product?.name}_${index}`} data={product} />
        )}
      />
    </HomeContainer>
  );
};

export default Home;
