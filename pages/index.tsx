import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { load } from "components/ffmpeg";
import Loading from "components/loading";
import Body from "components/Body/Main";
import Navbar from "components/Navbar/Main";
// Max input is 2GB or 4GB.
const Home: NextPage = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    load();
    setReady(true);
  }, []);

  return ready ? (
    <>
      <Navbar />
      <Body />
    </>
  ) : (
    <Loading />
  );
};

export default Home;
