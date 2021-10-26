import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const MyLayout = styled.div`
  display: flex;
  margin: 20px;
  main {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const Layout = ({ children }) => {
  return (
    <MyLayout>
      <Navbar />
      <main>{children}</main>
    </MyLayout>
  );
};

export default Layout;
