import ffmpeg from "../../ffmpeg";
import { useState } from "react";
import styles from "styles/body/afterUpload/BottomBar.module.scss";
function ProgressBar() {
  const [progress, setProgress] = useState(0);
  ffmpeg.setProgress(({ ratio }) => {
    let initialProgress = parseInt((ratio * 100).toString());
    if (initialProgress > 100 || initialProgress < 0) {
      initialProgress = 0;
    }
    setProgress(initialProgress);
  });

  return (
    <div className={styles.progressWrapper}>
      <div className={styles.progressBar} style={{ width: `${progress}%` }}>
        {progress > 0 && (
          <p
            style={{
              fontSize: "1rem",
            }}
          >
            {progress}%
          </p>
        )}
      </div>
    </div>
  );
}

export default ProgressBar;
