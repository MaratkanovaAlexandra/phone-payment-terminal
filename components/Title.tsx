import styled from "styled-components";

type TitleProps = {
  margin?: string;
  width?: string;
  fontSize: "large" | "normal";
  color?: string;
};

const StyledTitle = styled.h2<TitleProps>`
  font-weight: bold;
  font-size: ${({ fontSize }) => (fontSize === "large" ? "30px" : "25px")};
  color: ${({ color }) => color || "#000"};
  letter-spacing: 0.1rem;
  line-height: 110%;

  margin: ${({ margin }) => margin || "0"};
  width: ${({ width }) => width || "auto"};

  text-transform: capitalize;

  @media (min-width: 500px) {
    font-size: ${({ fontSize }) => (fontSize === "large" ? "70px" : "40px")};
  }

  @media (min-width: 769px) {
    font-size: ${({ fontSize }) => (fontSize === "large" ? "110px" : "40px")};
  }
`;

export default StyledTitle;
