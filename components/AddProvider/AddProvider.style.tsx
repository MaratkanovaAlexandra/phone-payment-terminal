import styled from "styled-components";

export const Background = styled.div`
  min-height: 86vh;
  background-color: #f1f1f1;
  padding: 50px 0 0;
`;

export const Container = styled.div`
  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: 0px 10px 8px 0px rgba(66, 52, 79, 0.2);
  padding: 40px 20px 20px;
`;

export const StyledForm = styled.form`
  margin: 50px 0 0;
  padding: 15px;
`;

export const FormControl = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-bottom: 30px;

  & input {
    height: 50px;
    font-size: 20px;
    padding: 0 10px;

    &:focus {
      outline: none;
    }
  }
`;
