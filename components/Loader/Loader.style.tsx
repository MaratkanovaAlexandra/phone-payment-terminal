import styled, { keyframes } from "styled-components";

const Ring = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Back = styled.div<{ fullScreen?: boolean }>`
  height: 100%;
  ${({ fullScreen }) => (fullScreen ? "padding: 40vh 0 0;" : "")}
  width: 100%;
`;

export const LoadRing = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #d693f1;
    border-radius: 50%;
    animation: ${Ring} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #d693f1 transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;
