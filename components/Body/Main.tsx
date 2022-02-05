import { NextPage } from "next";
import styles from "styles/body/main.module.scss";
import { convertToGif } from "../../functions/ready";
import { useRef, useState } from "react";

import BeforeUpload from "./BeforeUpload/main";
import AfterUpload from "./AfterUpload/main";
const Ready: NextPage = () => {
  const [videoUploaded, setVideoUploaded] = useState(false);
  // let outputQuality = 2;
  // const [selected, setSelected] = useState(1);
  // const downloadFile = useRef<any>(null);
  // const [converting, setConverting] = useState(false);
  // const [inputVideo, setInputVideo] = useState<File>();
  // const [gif, setGif] = useState("");

  return (
    <div className={styles.wrapper}>
      {videoUploaded ? <AfterUpload /> : <BeforeUpload />}
    </div>
  );
};

export default Ready;
