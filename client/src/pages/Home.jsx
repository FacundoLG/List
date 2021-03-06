import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user/UserContex";
import styled from "styled-components";
import Loading from "../components/Loading";
import MyError from "../components/MyError";
import Product from "../components/Product";
import ProductCreator from "../components/ProductCreator";
import ProductList from "../components/ProductList";
import useFetch from "../hooks/useFetch";
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
  const [products, setProducts] = useState([]);

  const [productsFetch, getData] = useFetch(
    "http://localhost:3500/products",
    "GET"
  );

  const GetProducts = () => {
    getData();
    setProducts(productsFetch?.message?.results);
    setLoading(false);
  };

  const CreateProduct = (data) => {
    console.log(data);
    //Pushear la data usando el token en el contexto del usuario y su id
    fetch("http://localhost:3500/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${user.token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        GetProducts();
      });
  };

  useEffect(() => {
    setProducts(productsFetch?.message?.results);
    setLoading(false);
  }, [productsFetch]);
  return (
    <HomeContainer>
      <ProductCreator
        create={(data) => {
          CreateProduct(data);
        }}
      />
      <ProductList
        userData={user}
        error={error}
        loading={loading}
        products={products}
        onError={() => <MyError />}
        onLoading={() => <Loading />}
        onEmpty={() => <p>Create a product for your next shopping day</p>}
        render={(product, index) => (
          <Product
            key={`${product?.name}_${index}`}
            data={product}
            refresh={GetProducts}
          />
        )}
      />
    </HomeContainer>
  );
};

export default Home;
