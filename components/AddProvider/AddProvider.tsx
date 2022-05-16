import { useRouter } from "next/router";
import { FC, useState } from "react";
import Image from "next/image";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Wrapper } from "../Wrapper";
import { Header } from "../Header";
import { Button } from "../Button";
import { Title } from "../Title";
import { Loader } from "../Loader";
import { Background, Container } from "./AddProvider.style";
import { Input } from "../Input";

const validate = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(2, "Password must be at least 2 charaters")
    .required("Required"),
  icon: Yup.string().required("Required"),
});

const validateButton = (values: { name: string; icon: string }) =>
  !(values.name.length > 1) || !values.icon;

export const AddProviderPage: FC = () => {
  const router = useRouter();
  const [loadings, setLoadings] = useState(false);

  const submit = async (values: { name: string; icon: string }) => {
    if (!values.icon || !values.name) return;
    const provider = {
      id: 0,
      ...values,
    };
    setLoadings(true);
    await fetch("https://tranquil-shelf-20388.herokuapp.com/providers/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(provider),
    });
    setLoadings(false);
    router.push("/providers");
  };

  return (
    <main>
      <Header />
      <Background>
        <Wrapper maxWidth="700px">
          {loadings ? (
            <Loader />
          ) : (
            <Container>
              <Formik
                initialValues={{ name: "", icon: "" }}
                validationSchema={validate}
                onSubmit={submit}
              >
                {(formik) => (
                  <>
                    <Title fontSize="normal">Create a new provider</Title>
                    <Form>
                      <Input label="Provider Name:" name="name" type="text" />
                      <Input label="Icon:" name="icon" type="text" />
                      <Button
                        type="submit"
                        disabled={validateButton(formik.values)}
                      >
                        <Image
                          src="/plus.svg"
                          alt="plus"
                          height="48px"
                          width="48px"
                          layout="fixed"
                        />
                        Add Provider
                      </Button>
                    </Form>
                  </>
                )}
              </Formik>
            </Container>
          )}
        </Wrapper>
      </Background>
    </main>
  );
};
