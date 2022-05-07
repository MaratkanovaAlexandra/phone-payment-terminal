import styled from "styled-components";

export const Background = styled.div`
  min-height: 86vh;
  background-color: #f1f1f1;
  padding: 0;

  @media (min-width: 500px) {
    padding: 50px 0 0;
  }
`;

export const Container = styled.div`
  background-color: #fafafa;
  border-radius: 5px;
  padding: 20px 20px;
  height: 86vh;

  & h2 {
    text-align: center;
    display: flex;
    align-items: center;
    gap: 15px;

    & img {
      border-radius: 10px;
      width: 40px;
      height: 40px;
    }
  }

  & form {
    margin: 10px 0 0;
    padding: 5px;

    & button {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  @media (min-width: 500px) {
    padding: 40px 20px 20px;

    height: min-content;
    background-color: #fafafa;
    box-shadow: 0px 10px 8px 0px rgba(66, 52, 79, 0.2);
    & h2 {
      text-align: left;

      & img {
        width: 70px;
        height: 70px;
      }
    }

    & form {
      margin: 50px 0 0;
      padding: 15px;

      & button {
        width: auto;
        display: inline-block;
      }
    }
  }
`;
