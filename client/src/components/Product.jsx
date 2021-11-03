import React, { useEffect } from "react";
import styled from "styled-components";
import { BsCart } from "react-icons/bs";
const MyProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 9vh;
  border: solid var(--color2) 1px;
  padding: var(--space-1);
  margin: var(--space-0-5);
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
      display: inline-block;
      font-size: 20px;
      text-align: center;
      padding: 1px var(--space-2);
      padding-bottom: 2px;
      border-radius: 15px;
      border: solid 1px var(--color2);
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
  useEffect(() => {
    if (data.unit) {
      data.unit =
        data.unit[0].toUpperCase() + data.unit.slice(1, data.unit.length);
    }
  }, []);
  return (
    <MyProduct style={{ borderColor: `var(--color${data.color})` }}>
      <div>
        <p className="productName">{data.name || "Mango"}</p>
        <div>
          <p className="Cuantity">
            {data.cuantity || "1"} x <span>{data.unit || "U"}</span>
          </p>
        </div>
      </div>
      <BsCart className="cart" />
    </MyProduct>
  );
};

export default Product;
