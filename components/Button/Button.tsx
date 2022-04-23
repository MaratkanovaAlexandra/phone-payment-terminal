import { FC, ReactNode } from "react";
import StyledButton from "./Button.styles";

type ButtonProps = {
  children: ReactNode | ReactNode[];
  clickHandler?: () => void;
  transparent?: boolean;
};

const Button: FC<ButtonProps> = (props) => {
  const { children, transparent, clickHandler } = props;

  return (
    <StyledButton transparent={transparent} onClick={clickHandler}>
      <p>{children}</p>
    </StyledButton>
  );
};

Button.defaultProps = {
  clickHandler: () => {},
  transparent: false,
};

export default Button;
