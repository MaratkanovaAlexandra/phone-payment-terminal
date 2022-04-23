import { useRouter } from "next/router";
import { FC } from "react";

import Center from "../Center";
import Header from "../Header";
import Wrapper from "../Wrapper";
import Title from "../Title";
import Text from "../Text";
import Button from "../Button";
import Background from "./Welcome.style";

import Back from "../../public/back.jpg";

const Welcome: FC = () => {
  const router = useRouter();

  return (
    <main>
      <Background image={Back.src} size="cover">
        <Header transparent />
        <Wrapper padding="110px 10px 354px">
          <Center direction="column">
            <Title fontSize="large" margin="0 0 20px" color="#fff">
              Welcome
            </Title>
            <Text margin="0 0 5px" center color="#fff">
              This is my test task using next.js.
            </Text>
            <Text margin="0 0 40px" center color="#fff">
              Unfortunately, I'm not very good at design, but I hope you'll like
              it.
            </Text>
            <Button transparent clickHandler={() => router.push("/providers")}>
              Let's get started!
            </Button>
          </Center>
        </Wrapper>
      </Background>
    </main>
  );
};

export default Welcome;
