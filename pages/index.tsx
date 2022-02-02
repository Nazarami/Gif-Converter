import type { NextPage } from "next";
import { load } from "../components/ffmpeg";
import { useEffect, useState } from "react";
import Loading from "../components/loading";
import Ready from "../components/ready";
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
    <Ready
      inputVideo={inputVideo}
      setInputVideo={setInputVideo}
      gif={gif}
      setGif={setGif}
    />
  ) : (
    <Loading />
  );
};

export default Home;
