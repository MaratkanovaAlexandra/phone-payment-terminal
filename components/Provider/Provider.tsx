import { FC, useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ProviderProps from "../../interfaces/Provider";

import Header from "../Header";
import Wrapper from "../Wrapper";
import Button from "../Button";
import Title from "../Title";
import Input from "../Input";
import Error from "../Error";
import Loader from "../Loader";
import { Background, Container } from "./Provider.style";

const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;

const validate = Yup.object({
  phoneNumber: Yup.string()
    .matches(regex, "Must be a phone number")
    .required("Required"),
  amount: Yup.string()
    .test("not-empty", "Can not be empty", (val) =>
      val ? !!(val as string).split(" ")[0] : false
    )
    .test("amount", "Must be more than 0 and less than 1000", (val) =>
      val
        ? +(val as string).split(" ")[0] >= 1 &&
          +(val as string).split(" ")[0] <= 1000
        : false
    )
    .required("Required"),
});

const Provider: FC<ProviderProps> = (props) => {
  const { id, name, icon } = props;
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
                  phoneNumber: "",
                  amount: "",
                }}
                validationSchema={validate}
                onSubmit={async (values) => {
                  setError(false);
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
                      <Input
                        label="Amount:"
                        name="amount"
                        type="text"
                        mask="9999 rub."
                      />
                      <Button
                        type="submit"
                        disabled={
                          +formik.values.amount.split(" ")[0] <= 0 ||
                          +formik.values.amount.split(" ")[0] > 1000 ||
                          !regex.test(formik.values.phoneNumber)
                        }
                      >
                        Send
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

export default Provider;
