import { useRef, useState } from "react";
import { convertToGif } from "functions/ready";
import styles from "styles/body/afterUpload/BottomBar.module.scss";
interface Props {
  video: File;
  quality: number;
}
function DownloadButton({ video, quality }: Props) {
  const [converting, setConverting] = useState(false);
  const [outputVideo, setOutputVideo] = useState<string>("");
  const downloadFile = useRef<HTMLAnchorElement>(null);
  return (
    <div>
      <a
        ref={downloadFile}
        href={outputVideo}
        download
        style={{ display: "none" }}
      ></a>
      <button
        disabled={converting}
        className={styles.downloadButton}
        onClick={async () => {
          setConverting(true);
          await convertToGif(video, setOutputVideo, quality);
          if (downloadFile.current) {
            downloadFile.current.click();
          }
          setConverting(false);
        }}
      >
        Download
      </button>
    </div>
  );
}

export default DownloadButton;
