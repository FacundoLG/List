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
const EventContainer = styled.div`
  display: flex;
  margin-top: 31vh;
  justify-content: center;
  font-size: 20px;
  text-align: center;
`;

const ProductList = (props) => {
  return (
    <List>
      {props.error ||
        props.loading ||
        (!props.products?.length && (
          <EventContainer>
            {props.error && props.onError()}
            {!props.error &&
              !props.products?.length &&
              props.loading &&
              props.onLoading()}
          </EventContainer>
        ))}
      {!props.error &&
        props.products?.map((prod, index) => props.render(prod, index))}
    </List>
  );
};

export default ProductList;
