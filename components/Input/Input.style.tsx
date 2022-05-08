import styled from "styled-components";

export default styled.div<{ valid?: boolean }>`
  position: relative;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-bottom: 35px;
  ${({ valid }) =>
    valid
      ? ``
      : `
      &::before {
        content: url(/close.svg);
        height: 20px;
        width: 20px;
        position: absolute;
        inset: 57% 15px auto auto;
      }
    `}

  & input {
    height: 50px;
    font-size: 20px;
    padding: 0 10px;
    border: 1px solid ${({ valid }) => (valid ? `#444` : `#ff3838`)};
    border-radius: 5px;
    background: transparent;

    &:focus {
      outline: none;
    }
  }

  @media (min-width: 500px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
`;
