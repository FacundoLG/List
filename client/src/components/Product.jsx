import React from "react";
import styled from "styled-components";
import { BsCart } from "react-icons/bs";
const MyProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 9vh;
  border: solid var(--secondary-color) 1px;
  padding: var(--space-1);
  margin: var(--space-0-5) 0;
  border-radius: 10px;
  p {
    margin: 0px;
  }
  .productName {
    font-size: 20px;
  }
  .Cuantity {
    font-size: 25px;
    span {
      font-size: 20px;
      background: var(--secondary-color);
      padding: 0px var(--space-2);
      border-radius: 20px;
    }
  }
  .cart {
    font-size: 20px;
    padding: var(--space-1);
    border-radius: 10px;
    :hover {
      cursor: pointer;
    }
    :active {
      background: var(--third-color);
    }
  }
`;

const Product = ({ data }) => {
  return (
    <MyProduct>
      <div>
        <p className="productName">{data?.name || "Mango"}</p>
        <div>
          <p className="Cuantity">
            {data?.cuantity || "1"} x <span>{data?.unity || "U"}</span>
          </p>
        </div>
      </div>
      <BsCart className="cart" />
    </MyProduct>
  );
};

export default Product;
