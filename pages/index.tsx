import type { NextPage } from "next";

import Head from "next/head";
import WelcomePage from "../components/Welcome";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Welcome</title>
    </Head>
    <WelcomePage />
  </>
);

export default Home;
