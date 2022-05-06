import { FC } from "react";
import { ErrorMessage, useField } from "formik";
import InputMask from "react-input-mask";
import FormControl from "./Input.style";

type InputProps = any;

const Input: FC<InputProps> = ({ label, mask, ...props }) => {
  const [field, meta] = useField(props as any);

  return (
    <FormControl valid={!(meta.touched && !!meta.error)}>
      <label htmlFor={field.name}>{label}</label>
      <InputMask
        mask={mask}
        maskChar=" "
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </FormControl>
  );
};

export default Input;
