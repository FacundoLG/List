import React from "react";
import styled from "styled-components";
import Product from "./Product";

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
  color: wheat;
`;

const ProductList = ({ products }) => {
  return (
    <List>
      {products?.map((product) => (
        <Product />
      ))}
      <h1>asdasd</h1>
      <h1>asdasd</h1>
      <h1>asdasd</h1>
      <h1>asdasd</h1>
      <h1>asdasd</h1>
      <h1>asdasd</h1>
      <h1>asdasd</h1>
    </List>
  );
};

export default ProductList;
