import React from "react";
import { BiLoader, BiLoaderAlt } from "react-icons/bi";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  .loader {
    font-size: 30px;
    animation: rotation infinite 2s linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(1deg);
    }
    to {
      transform: rotate(361deg);
    }
  }
`;

const Loading = () => {
  return (
    <>
      <Container>
        <BiLoaderAlt className="loader" />
      </Container>
    </>
  );
};

export default Loading;
