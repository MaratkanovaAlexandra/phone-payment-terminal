import styled from "styled-components";

export const Background = styled.div`
  min-height: 86vh;
  background-color: #fafafa;
  padding: 0;

  @media (min-width: 500px) {
    padding: 50px 0 0;
    background-color: #f1f1f1;
  }
`;

export const Container = styled.div`
  background-color: #fafafa;
  border-radius: 5px;
  padding: 20px 20px;
  height: 83vh;

  & h2 {
    text-align: center;
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

// export const StyledForm = styled.form`
//   margin: 10px 0 0;
//   padding: 5px;

//   & button {
//     width: 100%;
//     display: flex;
//     justify-content: center;
//   }

//   @media (min-width: 500px) {
//     margin: 50px 0 0;
//     padding: 15px;
//     & button {
//       width: auto;
//       display: inline-block;
//     }
//   }
// `;
