import styles from "styles/body/beforeUpload/body.module.scss";

import { useRef, useContext } from "react";
import { videoContext } from "../../../../Context";
function FileUpload() {
  const inputFile = useRef<HTMLInputElement>(null);
  const { setVideo } = useContext(videoContext);
  return (
    <>
      <input
        type="file"
        id="file"
        ref={inputFile}
        style={{ display: "none" }}
        onChange={(e) => {
          if (!e.target.files) return;
          setVideo(e.target.files[0]);
        }}
      />
      <p
        className={styles.uploadVideoPrompt}
        onClick={() => {
          if (inputFile.current) {
            inputFile.current.click();
          }
        }}
      >
        Browse on your device
      </p>
    </>
  );
}

export default FileUpload;
