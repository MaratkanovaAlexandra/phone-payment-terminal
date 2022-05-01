import { useRouter } from "next/router";
import { FC, useRef } from "react";
import Image from "next/image";
import Provider from "../../interfaces/Provider";

import { StyledForm, FormControl } from "./AddProvider.style";
import Button from "../Button";

type FormProps = {
};

const Form: FC<FormProps> = () => {
  const name = useRef<HTMLInputElement>(null);
  const icon = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const submitHandler = () => {
    if (!name.current?.value || !icon.current?.value) return;
    const provider = {
      name: name.current?.value,
      icon: icon.current?.value,
    };
    fetch('http://localhost:5050/providers/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(provider)
    });
    router.push("/providers");
  };

  return (
    <StyledForm>
      <FormControl>
        <label htmlFor="name">Provider Name:</label>
        <input
          ref={name}
          type="text"
          id="name"
          placeholder="Enter provider name"
        />
      </FormControl>
      <FormControl>
        <label htmlFor="icon">Icon:</label>
        <input ref={icon} type="text" id="icon" placeholder="Enter icon url" />
      </FormControl>
      <Button clickHandler={submitHandler}>
        <Image
          src="/plus.svg"
          alt="plus"
          height="48px"
          width="48px"
          layout="fixed"
        />
        Add Provider
      </Button>
    </StyledForm>
  );
};

export default Form;
