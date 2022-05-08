import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    z-index: -1;
    opacity: 0;
  }

  to {
    z-index: 2;
    opacity: 1;
  }
`;

export default styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0;
  right: 0;

  min-height: 30px;
  background-color: #ef5c5c;
  padding: 10px;
  animation: ${slideIn} 0.2s linear forwards;

  & p {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
  }
`;
