import { FC, ReactNode } from "react";
import StyledButton from "./Button.styles";

type ButtonProps = {
  children: ReactNode | ReactNode[];
  clickHandler?: () => void;
  transparent?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button: FC<ButtonProps> = (props) => {
  const { children, transparent, type, disabled, clickHandler } = props;

  return (
    <StyledButton
      transparent={transparent}
      onClick={clickHandler}
      type={type || "button"}
      disabled={disabled}
    >
      <p>{children}</p>
    </StyledButton>
  );
};

Button.defaultProps = {
  clickHandler: () => {},
  transparent: false,
  type: "button",
  disabled: false,
};

export default Button;
