import styled from "styled-components";

type BackgroundProps = {
  image?: string;
  color?: string;
  repeat?: string;
  size?: string;
  position?: string;
};

export default styled.div<BackgroundProps>`
  height: 100vh;
  background-color: ${(props) => props.color || ""};
  background-image: ${(props) => (props.image ? `url(${props.image})` : "")};
  background-repeat: ${(props) => props.repeat || ""};
  background-size: ${(props) => props.size || ""};
  background-position: ${(props) => props.position || ""};
`;
