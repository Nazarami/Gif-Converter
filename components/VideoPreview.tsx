import React from "react";
import styles from "../styles/videoPreview.module.scss";
import { useRef } from "react";

function VideoPreview({ inputVideo }: any) {
  const videoControls = useRef<any>(null);
  return (
    <div
      className={styles.uploadedVideoContainer}
      onClick={() => {
        if (videoControls.current.paused) {
          videoControls.current.play();
        } else {
          videoControls.current.pause();
        }
      }}
    >
      <video
        src={URL.createObjectURL(inputVideo)}
        ref={videoControls}
        className={styles.uploadedVideo}
      ></video>
    </div>
  );
}

export default VideoPreview;
