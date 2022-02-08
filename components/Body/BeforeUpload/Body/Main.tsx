import styles from "styles/body/beforeUpload/body.module.scss";
import UploadIcon from "public/body/upload.svg";
import FileUpload from "./FileUpload";

import { useDropzone } from "react-dropzone";
import { useContext } from "react";
import { videoContext } from "Context";

function beforeUpload() {
  const { setVideo } = useContext(videoContext);
  const { getRootProps } = useDropzone({
    accept: "video/*",
    onDrop: (acceptedFiles) => {
      setVideo(acceptedFiles[0]);
    },
  });
  return (
    <div className={styles.wrapper} {...getRootProps()}>
      <div className={styles.dottedOutline}>
        <UploadIcon height="35px" width="35px" />
        <h1 className={styles.videoWrapperHeader}>Drag and drop a video</h1>
        <FileUpload />
      </div>
    </div>
  );
}

export default beforeUpload;
