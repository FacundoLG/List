import React, { useEffect } from "react";
import styled from "styled-components";
import { BsCart, BsXCircle } from "react-icons/bs";
const MyProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid var(--color2) 1px;
  padding: var(--space-1-5);
  margin: var(--space-0-5) 0px;
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
      aspect-ratio: 4/2;
      font-size: 20px;
      text-align: center;
      padding: 1px var(--space-2);
      padding-bottom: 2px;
      border-radius: 15px;
      border: solid 1px var(--color2);
    }
  }
  .iconContainer {
    display: flex;
    align-items: center;
    .icon {
      display: inline-block;
      font-size: 24px;
      aspect-ratio: 1;
      padding: var(--space-0);
      margin: 0px 0px 0px 14px;
      border-radius: 10px;
      :hover {
        cursor: pointer;
      }
      :active {
        background: var(--third-color);
      }
    }
    .delete {
      color: red;
    }
  }
`;

const Product = ({ data, refresh }) => {
  const ChangeProductCartState = () => {
    let newCartState;
    if (data.cartState === "toBuy") {
      newCartState = "buyed";
    } else {
      newCartState = "toBuy";
    }
    fetch("http://localhost:3500/products", {
      method: "PATCH",
      headers: {
        Authorization: `bearer ${data.userData.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, cartState: newCartState }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Refreshing");
        refresh();
      });
  };

  const DeleteProduct = () => {
    fetch("http://localhost:3500/products", {
      method: "PATCH",
      headers: {
        Authorization: `bearer ${data.userData.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, active: false }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Refreshing");
        refresh();
      });
  };

  useEffect(() => {
    if (data.unit) {
      data.unit =
        data.unit[0].toUpperCase() + data.unit.slice(1, data.unit.length);
    }
  }, []);
  return (
    <MyProduct
      style={{
        borderColor: `var(--color${
          data.cartState === "buyed" ? 5 : data.color
        })`,
      }}
    >
      <div>
        <p className="productName">{data.name || "Mango"}</p>
        <div>
          <p className="Cuantity">
            {data.cuantity || "1"} x <span>{data.unit || "U"}</span>
          </p>
        </div>
      </div>
      <div className="iconContainer">
        <BsXCircle className="icon delete" onClick={DeleteProduct} />
        <BsCart className="icon" onClick={ChangeProductCartState} />
      </div>
    </MyProduct>
  );
};

export default Product;
