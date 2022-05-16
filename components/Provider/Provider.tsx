import { FC, useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { IProvider } from "../../interfaces/Provider";

import { Header } from "../Header";
import { Wrapper } from "../Wrapper";
import { Button } from "../Button";
import { Title } from "../Title";
import { Input } from "../Input";
import { Banner } from "../Banner";
import { Loader } from "../Loader";
import { Background, Container } from "./Provider.style";

const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;

const validate = Yup.object({
  phoneNumber: Yup.string()
    .matches(regex, "Must be a phone number")
    .min(16, "Must be a phone number")
    .required("Required"),
  amount: Yup.string()
    .test("amount", "Must be more than 0 and less than 1000", (val) =>
      val
        ? +(val as string).split("rub")[0] >= 1 &&
          +(val as string).split("rub")[0] <= 1000
        : false
    )
    .required("Required"),
});

export const ProviderPage: FC<IProvider> = (props) => {
  const { id, name, icon } = props;
  const router = useRouter();
  const [showBanner, setShowBanner] = useState(false);
  const [ok, setOk] = useState(true);
  const [code, setCode] = useState(0);
  const [bannerMessage, setBannerMessage] = useState("");
  const [loadings, setLoadings] = useState(false);

  const submit = async (values: { phoneNumber: string; amount: string }) => {
    setLoadings(true);
    const res = await fetch(
      `https://tranquil-shelf-20388.herokuapp.com/pay/${id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
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
  };

  const validateButton = (values: { phoneNumber: string; amount: string }) =>
    +values.amount.split("rub")[0] <= 0 ||
    +values.amount.split("rub")[0] > 1000 ||
    !regex.test(values.phoneNumber) ||
    values.phoneNumber.length < 16;

  return (
    <>
      {showBanner && <Banner ok={ok} code={code} message={bannerMessage} />}
      <main>
        <Header />
        <Background>
          <Wrapper maxWidth="700px">
            {loadings ? (
              <Loader />
            ) : (
              <Container>
                <Formik
                  initialValues={{ phoneNumber: "", amount: "0" }}
                  validationSchema={validate}
                  onSubmit={submit}
                >
                  {(formik) => (
                    <>
                      <Title fontSize="normal">
                        <img src={icon} alt={name} width="30" height="30" />
                        {name}
                      </Title>
                      <Form>
                        <Input
                          label="PhoneNumber:"
                          name="phoneNumber"
                          type="text"
                          mask="+7-999-999-99-99"
                        />
                        <Input label="Amount:" name="amount" type="number" />
                        <Button
                          type="submit"
                          disabled={validateButton(formik.values)}
                        >
                          Send
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
    </>
  );
};
