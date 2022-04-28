import type { NextPage } from "next";
import { GetStaticProps } from "next";

import Head from "next/head";
import ProviderPage from "../../components/Providers";
import Provider from "../../interfaces/Provider";

type ProvidersProps = {
  providers: Provider[];
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
    `${process.env.VERCEL_URL || " http://localhost:3000"}/api/get-providers`
  );
  const providers = await res.json();

  return {
    props: {
      providers,
    },
    revalidate: 5,
  };
};

export default Providers;
