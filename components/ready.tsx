import { NextPage } from "next";
import styles from "../styles/ready.module.scss";
import { ReadyProps } from "../interface/ready";
import { convertToGif } from "../functions/ready";
import Navbar from "./Navbar";
import UploadIcon from "./upload.svg";
import { useRef, useState } from "react";
import PlayIcon from "./play.svg";

const Ready: NextPage<ReadyProps> = (props) => {
  let outputQuality = 2;
  const inputFile = useRef<any>(null);
  const videoControls = useRef<any>(null);
  const [selected, setSelected] = useState(1);
  const downloadFile = useRef<any>(null);
  const [converting, setConverting] = useState(false);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.bodyContainer}>
        <div className={styles.bodyWrapper}>
          <div
            className={styles.dropVideoWrapper}
            style={props.inputVideo ? { background: "white" } : {}}
          >
            {props.inputVideo ? (
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
                  src={URL.createObjectURL(props.inputVideo)}
                  ref={videoControls}
                  className={styles.uploadedVideo}
                ></video>
              </div>
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
                  {/* <h5 style={{ marginBottom: 0 }}>File size</h5>
                  <div className={styles.qualityWrapper}>
                    <div className={styles.selectionWrapper}>
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          setSelected(0);
                        }}
                        className={`${styles.dot} ${
                          selected === 0 ? styles.dotSelected : ""
                        }`}
                      ></span>
                      <p className={styles.dotSelectionText}>Small</p>
                    </div>
                    <div className={styles.selectionWrapper}>
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          setSelected(1);
                        }}
                        className={`${styles.dot} ${
                          selected === 1 ? styles.dotSelected : ""
                        }`}
                      ></span>
                      <p className={styles.dotSelectionText}>Medium</p>
                    </div>
                    <div className={styles.selectionWrapper}>
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          setSelected(2);
                        }}
                        className={`${styles.dot} ${
                          selected === 2 ? styles.dotSelected : ""
                        }`}
                      ></span>
                      <p className={styles.dotSelectionText}>Large</p>
                    </div>
                  </div> */}
                  <button
                    className={styles.downloadButton}
                    {...(converting ? { disabled: true } : {})}
                    onClick={() => {
                      if (!props.inputVideo) return;
                      setConverting(true);
                      convertToGif(
                        props.inputVideo,
                        props.setGif,
                        outputQuality
                      ).then(() => {
                        downloadFile.current.click();
                        setConverting(false);
                      });
                    }}
                  >
                    Download
                  </button>
                  <a
                    ref={downloadFile}
                    href={props.gif}
                    download
                    style={{ display: "none" }}
                  ></a>
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
    </div>
  );
};

export default Ready;
