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
  return (
    <List>
      {props.error && props.onError()}
      {!props.error &&
        !props.products?.length &&
        props.loading &&
        props.onLoading()}
      {!props.error && !props.loading && props.onEmpty()}
      {!props.error &&
        props.products?.map((prod, index) => props.render(prod, index))}
    </List>
  );
};

export default ProductList;
