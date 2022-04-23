import styled from "styled-components";

type WrapperProps = {
  padding?: string;
  maxWidth?: string;
};

const Wrapper = styled.section<WrapperProps>`
  max-width: ${({ maxWidth }) => maxWidth || "1400px"};
  margin: 0 auto;
  padding: ${({ padding }) => padding || ""};
`;

export default Wrapper;
