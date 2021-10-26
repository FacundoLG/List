import React from "react";
import styled from "styled-components";

const Creator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70vw;
  height: 15vh;
  max-width: 535px;
  max-height: 90px;
  padding: var(--space-2);
  border-radius: 10px;
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
      }
      .colors {
        display: flex;
        > div {
          width: 25px;
          margin: 0px var(--space-0);
          background: #000;
          border-radius: 50%;
          aspect-ratio: 1;
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

const ProductCreator = () => {
  return (
    <Creator>
      <input type="text" className="ProductName" />
      <div className="ProductParams">
        <div className="params">
          <label htmlFor="">Cantidad</label>
          <input type="number" />
        </div>
        <div className="params">
          <label htmlFor="">Unidad</label>
          <input type="text" />
        </div>
        <div className="params ">
          <label htmlFor="">Color</label>
          <div className="colors">
            <div className="color1"></div>
            <div className="color2"></div>
            <div className="color3"></div>
            <div className="color4"></div>
          </div>
        </div>
      </div>
    </Creator>
  );
};

export default ProductCreator;
