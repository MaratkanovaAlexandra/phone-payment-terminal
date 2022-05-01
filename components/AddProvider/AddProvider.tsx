import { FC } from "react";

import Wrapper from "../Wrapper";
import Header from "../Header";
import Form from "./Form";
import Title from "../Title";
import { Background, Container } from "./AddProvider.style";

const AddProvider: FC = () => (
  <>
    <Header />
    <Background>
      <Wrapper maxWidth="700px">
        <Container>
          <Title fontSize="normal">Create a new provider</Title>
          <Form />
        </Container>
      </Wrapper>
    </Background>
  </>
);

export default AddProvider;
