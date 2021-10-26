import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const MyLayout = styled.div`
  display: flex;
  height: 100vh;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  padding: var(--space-2);
  padding-bottom: 0;
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
      <Container>
        <Navbar />
        <main>{children}</main>
      </Container>
    </MyLayout>
  );
};

export default Layout;
