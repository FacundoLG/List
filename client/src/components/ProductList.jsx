import React from "react";
import styled from "styled-components";
import Product from "./Product";

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  color: wheat;
  margin-top: var(--space-1);
  /* width */
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const ProductList = ({ products }) => {
  return (
    <List>
      {/* {products?.map((product) => (
        <Product />
      ))} */}
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </List>
  );
};

export default ProductList;
