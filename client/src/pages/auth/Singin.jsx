import React from "react";
import styled from "styled-components";
import { InputContainer, Container, Form } from "./styles";

const Singin = () => {
  const CreateUser = () => {};

  return (
    <Container>
      <Form action="">
        <div>
          <h2>
            <span>Shoping_List</span>
          </h2>
          <InputContainer>
            <label htmlFor="">Username</label>
            <input type="text" />
            <label htmlFor="">Password</label>
            <input type="text" />
            <p className="error"></p>
          </InputContainer>
        </div>
        <button>Sing-Up</button>
      </Form>
    </Container>
  );
};

export default Singin;
