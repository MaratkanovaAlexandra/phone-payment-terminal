import type { NextPage } from "next";

import Head from "next/head";
import Welcome from "../components/Welcome";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Welcome</title>
    </Head>
    <Welcome />
  </>
);

export default Home;
