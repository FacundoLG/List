import React from "react";
import styled from "styled-components";

import { BsHouseFill, BsGearFill } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
const MyNavBar = styled.nav`
  /* display: flex; */
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 45px;
  height: 80vh;
  margin: auto;
  background: var(--secondary-color);
  border-radius: 20px;
  @media (max-width: 500px) {
    display: none;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 28px;
  padding: var(--space-1);
  color: var(--font-color);
  aspect-ratio: 1;
`;

const Navbar = () => {
  return (
    <MyNavBar>
      <IconContainer>
        <BsHouseFill />
      </IconContainer>
      <IconContainer>
        <BsGearFill />
      </IconContainer>
      <IconContainer>
        <BiLogOutCircle />
      </IconContainer>
    </MyNavBar>
  );
};

export default Navbar;
