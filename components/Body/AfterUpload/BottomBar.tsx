import DownloadButton from "./DownloadButton";
import SelectQuality from "./SelectQuality";
import ProgressBar from "./ProgressBar";
import { useState } from "react";
import styles from "styles/body/afterUpload/BottomBar.module.scss";
function BottomBar({ video }: { video: File }) {
  const [quality, setQuality] = useState(1);
  return (
    <div className={styles.wrapper}>
      <SelectQuality quality={quality} setQuality={setQuality} />
      <DownloadButton video={video} quality={quality} />
      <ProgressBar />
    </div>
  );
}

export default BottomBar;
