import Head from "next/head";
import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import IProvider from "../../interfaces/Provider";

import ProviderPage from "../../components/Provider";

type ProviderProps = {
  provider: IProvider;
};

const Provider: NextPage<ProviderProps> = ({ provider }) => (
  <>
    <Head>
      <title>{`Pay ${provider.name}`}</title>
    </Head>
    <ProviderPage {...provider} />
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await fetch(
    "https://tranquil-shelf-20388.herokuapp.com/paths"
  );
  const paths = await result.json();

  return {
    paths: paths.map((path: IProvider) => ({ params: { providerId: path } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const result = await fetch(
    `https://tranquil-shelf-20388.herokuapp.com/providers/${params?.providerId}`
  );
  const provider = await result.json();
  return {
    props: { provider },
  };
};

export default Provider;
