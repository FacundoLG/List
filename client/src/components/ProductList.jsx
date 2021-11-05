import React, { useEffect, useState } from "react";
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
  const [toBuyProducts, setToBuyProducts] = useState([]);
  const [buyedProducts, setBuyedProducts] = useState([]);
  const { userData } = props;

  useEffect(() => {
    let toBuy = [];
    let buyed = [];
    props.products?.map((prod) => {
      if (prod.cartState === "toBuy") {
        return toBuy.push(prod);
      } else {
        return buyed.push(prod);
      }
    });

    setToBuyProducts(toBuy);
    setBuyedProducts(buyed);
  }, [props.products]);

  return (
    <List>
      {props.loading ? (
        <EventContainer>{props.onLoading()}</EventContainer>
      ) : (
        ""
      )}
      {props.error || props.products.length <= 0 ? (
        <EventContainer>
          {props.error && props.onError()}
          {!props.error && props.onEmpty()}
        </EventContainer>
      ) : (
        ""
      )}

      {!props.error &&
        toBuyProducts?.map((prod, index) =>
          props.render({ ...prod, userData }, index)
        )}
      {!props.error &&
        buyedProducts?.map((prod, index) =>
          props.render({ ...prod, color: 5, userData }, index)
        )}
    </List>
  );
};

export default ProductList;
