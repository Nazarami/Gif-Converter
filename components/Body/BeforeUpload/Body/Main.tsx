import styles from "styles/body/beforeUpload/body.module.scss";
import UploadIcon from "public/body/upload.svg";
import Hover from "public/body/hover.svg";

import FileUpload from "./FileUpload";
import { useContext, useState } from "react";
import { videoContext } from "Context";

function BeforeUpload() {
  const { setVideo } = useContext(videoContext);
  const [hover, setHover] = useState(false);
  return (
    <div
      className={styles.wrapper}
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      onDrop={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <div
        className={`${styles.dottedOutline} ${hover ? styles.hover : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setHover(true);
        }}
        onDrop={(e) => {
          e.preventDefault();
          e.stopPropagation();
          let file = e.dataTransfer.files[0];
          setVideo(file);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setHover(false);
        }}
      >
        {!hover ? (
          <UploadIcon height="35px" width="35px" />
        ) : (
          <Hover height="35px" width="35px" />
        )}
        <h1 className={styles.videoWrapperHeader}>Drag and drop a video</h1>
        <FileUpload />
      </div>
    </div>
  );
}

export default BeforeUpload;
