import { FC } from "react";
import { ErrorMessage, useField } from "formik";
import FormControl from "./Input.style";

type InputProps = any;

const Input: FC<InputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props as any);

  return (
    <FormControl valid={!(meta.touched && !!meta.error)}>
      <label htmlFor={field.name}>{label}</label>
      <input {...field} {...props} autoComplete="off" />
      <ErrorMessage component="div" name={field.name} className="error" />
    </FormControl>
  );
};

export default Input;
