import React from "react";
import styled from "styled-components";

const List = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  color: var(--font-color);
  margin-top: var(--space-1);
  /* width */
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const ProductList = (props) => {
  console.log(props.products);
  return (
    <List>
      {props.error && props.onError()}
      {!props.error && props.products.lenght === 0 && props.onLoading()}
      {!props.error &&
        props.products.map((prod, index) => props.render(prod, index))}
    </List>
  );
};

export default ProductList;
