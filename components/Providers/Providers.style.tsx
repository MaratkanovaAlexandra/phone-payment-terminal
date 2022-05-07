import styled from "styled-components";

export const Background = styled.div`
  min-height: 86vh;
  padding: 0 0 30px;
  background-color: #f1f1f1;
`;

export const StyledUl = styled.ul`
  width: 100%;
  margin-bottom: 50px;
  list-style: none;
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;

  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;

  background-color: #fafafa;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out, box-shadow 0.5s ease-in-out;

  & img {
    border-radius: 10px;
  }

  &::after {
    content: url(/arrow.svg);
    position: absolute;
    inset: 0 0 0 auto;
    width: 84px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #b700ff45;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  &:hover {
    background-color: #fff;
    box-shadow: 0px 10px 8px 0px rgba(66, 52, 79, 0.2);
  }

  &:hover::after {
    opacity: 1;
  }
`;
