import styled from "styled-components";

type TextProps = {
  margin?: string;
  width?: string;
  center?: boolean;
  color?: string;
};

const Text = styled.p<TextProps>`
  font-size: 16px;
  font-weight: 400;

  color: ${({ color }) => color || "#000"};
  margin: ${({ margin }) => margin || "0"};
  width: ${({ width }) => width || "auto"};
  ${(center) => (center ? "text-align: center;" : "")}
`;

export default Text;
