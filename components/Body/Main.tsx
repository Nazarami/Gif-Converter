import { NextPage } from "next";
import styles from "styles/body/main.module.scss";
import { useState } from "react";
import BeforeUpload from "./BeforeUpload/main";
import AfterUpload from "./AfterUpload/Main";
import { videoContext } from "Context";

const Ready: NextPage = () => {
  const [video, setVideo] = useState<File>();
  return (
    <videoContext.Provider
      value={{
        video,
        setVideo,
      }}
    >
      <div className={styles.wrapper}>
        {video ? <AfterUpload /> : <BeforeUpload />}
      </div>
    </videoContext.Provider>
  );
};

export default Ready;
