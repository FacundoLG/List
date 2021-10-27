import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Creator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  padding: var(--space-2);
  color: var(--font-color);
  background: var(--third-color);
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
      margin: 0px var(--space-1);
      label {
        margin: var(--space-1) 0px;
        font-size: 14px;
      }
      input {
        width: 60px;
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
  }
`;

const ProductCreator = ({ create }) => {
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productUnity, setProductUnity] = useState("");
  const [productColor, setProductColor] = useState(1);
  const [focus, setFocus] = useState(false);

  const focused = () => {
    setFocus(true);
  };
  const unfocused = () => {
    setFocus(false);
  };

  const sendData = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      console.log("enter");
      if (focus === true) {
        // sendData();
        console.log("Enviando data");
        // const data = {
        //   name: productName,
        //   quantity: productQuantity,
        //   unity: productUnity,
        //   color: productColor,
        // };
        // create(data);
        // setProductName("");
        // setProductQuantity("");
        // setProductUnity("")
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", sendData);
    return () => {
      document.removeEventListener("keyup", sendData, false);
    };
  }, [focus]);

  console.log(focus);

  return (
    <Creator>
      <input
        id="name"
        type="text"
        className="ProductName"
        onFocus={focused}
        onBlur={unfocused}
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
            onFocus={focused}
            onBlur={unfocused}
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
            onFocus={focused}
            onBlur={unfocused}
            onChange={(e) => {
              setProductUnity(e.target.value);
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
  );
};

export default ProductCreator;
