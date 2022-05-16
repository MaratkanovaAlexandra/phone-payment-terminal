import { FC } from "react";
import { ErrorMessage, useField } from "formik";
import InputMask from "react-input-mask";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";

import { FormControl } from "./Input.style";

const currencyMask = createNumberMask({
  prefix: "",
  suffix: "rub",
  includeThousandsSeparator: false,
});

type InputProps = any;

export const Input: FC<InputProps> = ({ label, mask, type, ...props }) => {
  const [field, meta] = useField(props as any);

  return (
    <FormControl valid={!(meta.touched && !!meta.error)}>
      <label htmlFor={field.name}>{label}</label>
      {(type as string) === "text" ? (
        <InputMask
          mask={mask}
          type={type}
          maskChar=""
          {...field}
          {...props}
          autoComplete="off"
        />
      ) : (
        <MaskedInput
          mask={currencyMask}
          {...field}
          type="text"
          {...props}
          maxLength="7"
          autoComplete="off"
        />
      )}
      <ErrorMessage component="div" name={field.name} className="error" />
    </FormControl>
  );
};
