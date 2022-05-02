import type { NextPage } from "next";

import Head from "next/head";
import AddProviderPage from "../../components/AddProvider";

const AddProvider: NextPage = () => (
  <>
    <Head>
      <title>Add provider</title>
    </Head>
    <AddProviderPage />
  </>
);

export default AddProvider;
