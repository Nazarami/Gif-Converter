import DownloadButton from "./DownloadButton";
import SelectQuality from "./SelectQuality";
import ProgressBar from "./ProgressBar";
import styles from "styles/body/afterUpload/BottomBar.module.scss";
function bottomBar({ video }: { video: File }) {
  return (
    <div className={styles.wrapper}>
      <SelectQuality />
      <DownloadButton video={video} />
      <ProgressBar />
    </div>
  );
}

export default bottomBar;
