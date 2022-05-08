import { useRouter } from "next/router";
import { FC } from "react";
import Image from "next/image";

import { Background } from "./Providers.style";
import Header from "../Header";
import Center from "../Center";
import Wrapper from "../Wrapper";
import ProviderList from "./ProviderList";
import Button from "../Button";
import Provider from "../../interfaces/Provider";

type ProviderPagePrors = {
  providers: Provider[];
};

const ProviderPage: FC<ProviderPagePrors> = ({ providers }) => {
  const router = useRouter();

  return (
    <main>
      <Header />
      <Background>
        <Wrapper maxWidth="700px" padding="50px 10px 0">
          <Center direction="column">
            <ProviderList providers={providers} />
            <Button clickHandler={() => router.push("/providers/add-provider")}>
              <Image
                src="/plus.svg"
                alt="plus"
                height="48px"
                width="48px"
                layout="fixed"
              />
              Add new provider
            </Button>
          </Center>
        </Wrapper>
      </Background>
    </main>
  );
};

export default ProviderPage;
