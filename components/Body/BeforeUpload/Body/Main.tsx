import styles from "styles/body/beforeUpload/body.module.scss";
import UploadIcon from "public/body/upload.svg";
import FileUpload from "./FileUpload";
import { useContext } from "react";
import { videoContext } from "Context";

function beforeUpload() {
  const { setVideo } = useContext(videoContext);
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
        let file = e.dataTransfer.files[0];
        setVideo(file);
      }}
    >
      <div className={styles.dottedOutline}>
        <UploadIcon height="35px" width="35px" />
        <h1 className={styles.videoWrapperHeader}>Drag and drop a video</h1>
        <FileUpload />
      </div>
    </div>
  );
}

export default beforeUpload;
