import styled from "styled-components";

export default styled.button<{ transparent?: boolean }>`
  position: relative;

  background-color: ${({ transparent }) =>
    transparent ? "transparent" : "#b700ff"};
  border: 2px solid ${({ transparent }) => (transparent ? "#fff" : "#b700ff")};
  border-radius: 5px;
  padding: 10px 20px;

  cursor: pointer;
  overflow: ${({ transparent }) => (transparent ? "hidden" : "visible")};

  & > p {
    position: relative;
    z-index: 1;

    display: flex;
    align-items: center;

    font-size: 20px;
    font-weight: 400;
    color: #fff;
  }

  &::before {
    content: "";
    transition: all 0.5s ease-in-out;
    ${({ transparent }) =>
      transparent
        ? `
      position: absolute;
      inset: auto 0 100% auto;
      background-color: #b700ff;
      border-radius: 5px;
      height: 110%;
      width: 100%;
    `
        : `
      position: absolute;
      height: calc(100% + 20px);
      width: calc(100% + 20px);
      inset: -10px -10px auto auto;
      background-color: transparent;
      border-radius: 10px;
    `}
  }

  &:hover::before {
    ${({ transparent }) =>
      transparent ? "inset: auto 0 -5% auto;" : "background-color: #b700ff45;"}
  }

  @media (min-width: 500px) {
    padding: 15px 45px;

    & > p {
      font-size: 26px;
    }
  }
`;
