import { useRouter } from "next/router";
import { FC, useState } from "react";
import Image from "next/image";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Wrapper from "../Wrapper";
import Header from "../Header";
import Button from "../Button";
import Title from "../Title";
import Error from "../Error";
import Loader from "../Loader";
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
  const [error, setError] = useState(false);
  const [errorCode, setErrorCode] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [loadings, setLoadings] = useState(false);

  return (
    <>
      <Header />
      <Background>
        <Wrapper maxWidth="700px">
          {loadings && <Loader />}
          {!loadings && (
            <Container>
              <Formik
                initialValues={{
                  name: "",
                  icon: "",
                }}
                validationSchema={validate}
                onSubmit={async (values) => {
                  setError(false);
                  if (!values.icon || !values.name) return;
                  const provider = {
                    id: 0,
                    ...values,
                  };
                  setLoadings(true);
                  const res = await fetch(
                    "https://tranquil-shelf-20388.herokuapp.com/providers/create",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(provider),
                    }
                  );
                  const { message } = await res.json();
                  if (res.ok) router.push("/providers");
                  else {
                    setLoadings(false);
                    setError(true);
                    setErrorCode(res.status);
                    setErrorMessage(message);
                  }
                }}
              >
                {(formik) => (
                  <div>
                    {error && (
                      <Error errCode={errorCode} message={errorMessage} />
                    )}
                    <Title fontSize="normal">Create a new provider</Title>
                    <Form>
                      <Input label="Provider Name:" name="name" type="text" />
                      <Input label="Icon:" name="icon" type="text" />
                      <Button
                        type="submit"
                        disabled={
                          !(formik.values.name.length > 1) ||
                          !formik.values.icon
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
          )}
        </Wrapper>
      </Background>
    </>
  );
};

export default AddProvider;
