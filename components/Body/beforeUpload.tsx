import styles from "styles/body/beforeUpload.module.scss";
import UploadIcon from "public/body/upload.svg";
import VideoPreview from "./VideoPreview";

import { useRef } from "react";
function beforeUpload({ inputVideo, setInputVideo }: any) {
  const inputFile = useRef<any>(null);
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.bodyWrapper}>
        <div
          className={styles.dropVideoWrapper}
          style={inputVideo ? { background: "white" } : {}}
        >
          {inputVideo ? (
            <VideoPreview inputVideo={inputVideo} />
          ) : (
            <div className={styles.outlineVideoWrapper}>
              <UploadIcon height="35px" width="35px" />
              <h1 className={styles.videoWrapperHeader}>
                Drag and drop a video
              </h1>
              <input
                type="file"
                id="file"
                ref={inputFile}
                style={{ display: "none" }}
                onChange={(e) => {
                  if (!e.target.files) return;
                  setInputVideo(e.target.files[0]);
                }}
              />
              <p
                className={styles.dropVideoSubHeader}
                onClick={() => {
                  if (inputFile.current) {
                    inputFile.current.click();
                  }
                }}
              >
                Browse on your device
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default beforeUpload;
