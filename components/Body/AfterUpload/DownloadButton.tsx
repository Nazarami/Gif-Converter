import { useRef, useState } from "react";
import { convertToGif } from "functions/ready";
import styles from "styles/body/afterUpload/BottomBar.module.scss";
function DownloadButton({ video }: { video: File }) {
  const [converting, setConverting] = useState(false);
  const [outputVideo, setOutputVideo] = useState<string>("");
  const downloadFile = useRef<HTMLAnchorElement>(null);
  const outputQuality = 2;
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
          await convertToGif(video, setOutputVideo, outputQuality);
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
