import { NextPage } from "next";
import styles from "../styles/ready.module.scss";
import { ReadyProps } from "../interface/ready";
import { convertToGif } from "../functions/ready";
import Navbar from "./Navbar";
import UploadIcon from "./upload.svg";
import { useRef } from "react";
const Ready: NextPage<ReadyProps> = (props) => {
  let outputQuality = 0;
  const inputFile = useRef(null);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.bodyContainer}>
        <div className={styles.bodyWrapper}>
          <div className={styles.dropVideoWrapper}>
            {props.inputVideo ? (
              <video
                controls
                width="250"
                height="250"
                src={URL.createObjectURL(props.inputVideo)}
              ></video>
            ) : (
              <div className={styles.outlineVideoWrapper}>
                <UploadIcon height="35px" width="35px" />
                <h1 className={styles.videoWrapperHeader}>
                  Drag and drop a video
                </h1>
                <input
                  type="file"
                  id="file"
                  ref={inputFile}
                  style={{ display: "none" }}
                  onChange={(e) => {
                    if (!e.target.files) return;
                    props.setInputVideo(e.target.files[0]);
                  }}
                />
                <p
                  className={styles.dropVideoSubHeader}
                  onClick={() => {
                    if (inputFile.current) {
                      inputFile.current.click();
                    }
                  }}
                >
                  Browse on your device
                </p>
              </div>
            )}
          </div>
          <div className={styles.sideHeader}>
            <h1 className={styles.sideHeaderTitle}>Convert to GIF</h1>
            <div className={styles.subTitle}>
              <h6 className={styles.subTitleHeader}>
                Powered by <em>WASM</em>
              </h6>
              {props.inputVideo ? (
                <div className={styles.uploadedVideoWrapper}>
                  <h5>File size</h5>
                </div>
              ) : (
                <p className={styles.subTitleParagraph}>
                  Convert a video into a GIF in seconds with our free online
                  tool.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <h3>Result</h3>
      <button
        onClick={() => {
          if (!props.inputVideo) return;
          convertToGif(props.inputVideo, props.setGif, outputQuality);
        }}
      >
        Convert
      </button>
      {props.gif && <img src={props.gif} width="250" />}
    </div>
  );
};

export default Ready;
