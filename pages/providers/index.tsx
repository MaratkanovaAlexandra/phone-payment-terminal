import type { NextPage } from "next";
import { GetStaticProps } from "next";

import Head from "next/head";
import { ProviderPage } from "../../components/Providers";
import { IProvider } from "../../interfaces/Provider";

type ProvidersProps = {
  providers: IProvider[];
};

const Providers: NextPage<ProvidersProps> = ({ providers }) => (
  <>
    <Head>
      <title>Providers</title>
    </Head>
    <ProviderPage providers={providers} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://tranquil-shelf-20388.herokuapp.com/providers"
  );
  const providers = await res.json();

  return {
    props: {
      providers,
    },
    revalidate: 1,
  };
};

export default Providers;
