import styled from "styled-components";

export const Center = styled.div<{ direction?: string }>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: center;
  justify-content: center;
`;
