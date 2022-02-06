import ffmpeg from "../../ffmpeg";
import { useState } from "react";
import styles from "styles/body/afterUpload/BottomBar.module.scss";
function ProgressBar() {
  // function returnNumbersBetween(x, y) {
  //   let arr = [];
  //   for (let i = x; i <= y; i++) {
  //     arr.push(i);
  //   }
  //   return arr;
  // }
  // function updateProgress(array) {
  //   for (let i = 0; i < array.length; i++) {
  //     setProgress(array[i]);
  //   }
  // }
  const [progress, setProgress] = useState(0);
  ffmpeg.setProgress(({ ratio }) => {
    let initialProgress = parseInt((ratio * 100).toString());
    if (initialProgress > 100 || initialProgress < 0) {
      initialProgress = 0;
    }
    // let difference = initialProgress - progress;
    // if (difference > 0) {
    //   updateProgress(returnNumbersBetween(progress, initialProgress));
    // }
    setProgress(initialProgress);
  });

  return (
    <div className={styles.progressWrapper}>
      <div
        className={styles.progressBar}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
