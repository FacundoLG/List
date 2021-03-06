import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  color: var(--font-color);
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 430px;
  border: solid var(--color2) 1px;
  border-radius: 10px;
  padding: var(--space-2);
  box-shadow: 1px 2px 5px 1px var(--colored-shadow);
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .text {
      width: 100%;
      text-align: center;
      height: 14px;
      margin: 0px;
      margin-top: 2px;
      font-size: 13px;
      > span {
        .link {
          color: var(--secondary-color);
        }
      }
    }
  }
  button {
    background: transparent;
    width: 100%;
    border: solid var(--font-color) 1px;
    box-shadow: 1px 2px 5px 1px var(--light-shadow);
    color: var(--font-color);
    padding: var(--space-1) 0px;
    border-radius: 5px;
    margin-bottom: var(--space-1);
    :hover {
      cursor: pointer;
    }
    :active {
      background-color: var(--third-color);
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .error {
    display: inline-block;
    text-align: center;
    width: 100%;
    height: 14px;
    margin: 0px;
    font-size: 13px;
    color: red;
  }

  input {
    font-size: 17px;
    margin-bottom: var(--space-2);
    padding: var(--space-1) var(--space-1);
    background: transparent;
    border: none;
    border: solid 1px var(--color2);
    border-radius: 10px;
    color: var(--font-color);
    outline: none;
  }

  label {
    margin-bottom: var(--space-0);
  }
`;
