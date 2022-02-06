import React from "react";
import styles from "styles/body/afterUpload/body.module.scss";
import { useRef } from "react";
function VideoPreview({ video }: { video: File }) {
  const videoControls = useRef<any>(null);
  return (
    <div
      onClick={() => {
        if (videoControls.current.paused) {
          videoControls.current.play();
        } else {
          videoControls.current.pause();
        }
      }}
    >
      <video
        src={URL.createObjectURL(video)}
        ref={videoControls}
        className={styles.uploadedVideo}
      ></video>
    </div>
  );
}

export default VideoPreview;
