import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { load } from "components/ffmpeg";
import Loading from "components/loading";
import Ready from "components/ready";
import Navbar from "components/Navbar/Navbar";
// Max input is 2GB or 4GB.
const Home: NextPage = () => {
  const [ready, setReady] = useState(false);
  const [inputVideo, setInputVideo] = useState<File>();
  const [gif, setGif] = useState("");

  useEffect(() => {
    load();
    setReady(true);
  }, []);

  return ready ? (
    <>
      <Navbar />
      {/* <Ready
        inputVideo={inputVideo}
        setInputVideo={setInputVideo}
        gif={gif}
        setGif={setGif}
      /> */}
    </>
  ) : (
    <Loading />
  );
};

export default Home;
