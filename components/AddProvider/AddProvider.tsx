import { useRouter } from "next/router";
import { FC, useState } from "react";
import Image from "next/image";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Wrapper from "../Wrapper";
import Header from "../Header";
import Button from "../Button";
import Title from "../Title";
import Banner from "../Banner";
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
  const [showBanner, setShowBanner] = useState(false);
  const [ok, setOk] = useState(true);
  const [code, setCode] = useState(0);
  const [bannerMessage, setBannerMessage] = useState("");
  const [loadings, setLoadings] = useState(false);

  return (
    <>
      {showBanner && <Banner ok={!ok} code={code} message={bannerMessage} />}
      <main>
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
                    setLoadings(false);
                    setShowBanner(true);
                    setOk(res.ok);
                    setCode(res.status);
                    setBannerMessage(message);

                    if (res.ok) {
                      setTimeout(() => router.push("/providers"), 500);
                    }
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
      </main>
    </>
  );
};

export default AddProvider;
