import { useRouter } from "next/router";
import { FC } from "react";
import Image from "next/image";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Wrapper from "../Wrapper";
import Header from "../Header";
import Button from "../Button";
import Title from "../Title";
import { Background, Container } from "./AddProvider.style";
import Input from "../Input";

const validate = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(2, "Password must be at least 2 charaters")
    .required("Required"),
  icon: Yup.string().required("Required"),
});

const AddProvider: FC = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <Background>
        <Wrapper maxWidth="700px">
          <Container>
            <Formik
              initialValues={{
                name: "",
                icon: "",
              }}
              validationSchema={validate}
              onSubmit={(values) => {
                if (!values.icon || !values.name) return;
                const provider = {
                  id: 0,
                  ...values,
                };
                fetch("http://localhost:5050/providers/create", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(provider),
                });
                router.push("/providers");
              }}
            >
              {(formik) => (
                <div>
                  <Title fontSize="normal">Create a new provider</Title>
                  <Form>
                    <Input label="Provider Name:" name="name" type="text" />
                    <Input label="Icon:" name="icon" type="text" />
                    <Button
                      type="submit"
                      disabled={
                        !(formik.values.name.length > 1) || !formik.values.icon
                      }
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
                </div>
              )}
            </Formik>
          </Container>
        </Wrapper>
      </Background>
    </>
  );
};

export default AddProvider;
