import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { InputContainer, Container, Form } from "./styles";
const Singup = () => {
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
            <label htmlFor="">E-mail</label>
            <input type="text" />
            <label htmlFor="">Password</label>
            <input type="text" />
            <label htmlFor="">ConfirmPassword</label>
            <input type="text" />
            <p className="error"></p>
          </InputContainer>
        </div>
        <div>
          <button>Sing-Up</button>
          <p className="text">
            Already have and account{" "}
            <span>
              <Link className="link" to="/singin">
                Sing-In
              </Link>
            </span>
          </p>
        </div>
      </Form>
    </Container>
  );
};

export default Singup;
