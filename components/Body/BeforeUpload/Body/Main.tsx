import styles from "styles/body/beforeUpload/body.module.scss";
import UploadIcon from "public/body/upload.svg";
import FileUpload from "./FileUpload";

function beforeUpload() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dottedOutline}>
        <UploadIcon height="35px" width="35px" />
        <h1 className={styles.videoWrapperHeader}>Drag and drop a video</h1>
        <FileUpload />
      </div>
    </div>
  );
}

export default beforeUpload;
