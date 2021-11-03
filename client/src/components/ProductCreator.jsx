import React, { useState } from "react";
import styled from "styled-components";

const Creator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;

  .ProductName {
    display: flex;
    height: 34px;
    padding: 0px var(--space-2);
    border: none;
    border-radius: 100px;
    background: var(--primary-color);
    color: var(--font-color);
    font-size: 17px;
  }
  .ProductParams {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .params {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0px var(--space-0);
      label {
        margin: var(--space-1) 0px;
        font-size: 14px;
      }
      input {
        width: 55px;
        background: var(--primary-color);
        border: none;
        border-radius: 50px;
        height: 22px;
        color: var(--font-color);
        text-align: center;
        outline: none;
        font-weight: 600;
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        [type="number"] {
          -moz-appearance: textfield;
        }
      }
      .colors {
        display: flex;
        > div {
          width: 25px;
          margin: 0px var(--space-0);
          background: #000;
          border-radius: 50%;
          aspect-ratio: 1;
          :hover {
            cursor: pointer;
            box-shadow: 1px 2px 5px 1px var(--third-color);
            transition: 200ms ease;
            filter: brightness(1.2);
          }
        }
        .color1 {
          background: var(--color1);
        }
        .color2 {
          background: var(--color2);
        }
        .color3 {
          background: var(--color3);
        }
        .color4 {
          background: var(--color4);
        }
      }
    }
    .buttonContainer {
      display: flex;
      justify-content: center;
      button {
        margin: var(--space-2) 0px 0px 0px;
      }
    }
  }
`;

const CreatorContainer = styled.div`
  padding: var(--space-2);
  color: var(--font-color);
  background: var(--third-color);
  border-radius: 10px;
  .buttonContainer {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    button {
      border: none;
      margin-top: var(--space-1);
      padding: var(--space-0-5) var(--space-1);
      border-radius: 5px;
      background: var(--secondary-color);
      color: var(--font-color);
      font-family: "Lato", Arial, Helvetica, sans-serif;
      :hover {
        cursor: pointer;
      }
      :active {
        filter: brightness(1.2);
      }
    }
  }
`;

const ProductCreator = ({ create }) => {
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productUnity, setProductUnity] = useState("");
  const [productColor, setProductColor] = useState(1);

  const sendData = () => {
    console.log("Enviando data");
    const data = {
      name: productName,
      quantity: productQuantity,
      unit: productUnity,
      color: productColor,
    };
    create(data);
    setProductName("");
    setProductQuantity("");
    setProductUnity("");
  };

  return (
    <CreatorContainer>
      <Creator>
        <input
          id="productname"
          type="text"
          className="ProductName"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
        <div className="ProductParams">
          <div className="params">
            <label htmlFor="params">Cantidad</label>
            <input
              id="quantity"
              type="number"
              value={productQuantity}
              onChange={(e) => {
                setProductQuantity(e.target.value);
              }}
            />
          </div>
          <div className="params">
            <label htmlFor="unity">Unidad</label>
            <input
              id="unity"
              type="text"
              value={productUnity}
              onChange={(e) => {
                if (e.target.value.length <= 3) {
                  setProductUnity(e.target.value);
                }
              }}
            />
          </div>
          <div className="params ">
            <label htmlFor="">Color</label>
            <div className="colors">
              <div
                className="color1"
                onClick={() => {
                  setProductColor(1);
                }}
              ></div>
              <div
                className="color2"
                onClick={() => {
                  setProductColor(2);
                }}
              ></div>
              <div
                className="color3"
                onClick={() => {
                  setProductColor(3);
                }}
              ></div>
              <div
                className="color4"
                onClick={() => {
                  setProductColor(4);
                }}
              ></div>
            </div>
          </div>
        </div>
      </Creator>
      <div className="buttonContainer">
        <button onClick={sendData}>Create</button>
      </div>
    </CreatorContainer>
  );
};

export default ProductCreator;
