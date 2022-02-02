import { NextPage } from "next";
import styles from "../styles/ready.module.scss";
import { ReadyProps } from "../interface/ready";
import { convertToGif } from "../functions/ready";
import Navbar from "./Navbar";
const Ready: NextPage<ReadyProps> = (props) => {
  let outputQuality = 0;
  return (
    <div className={styles.container}>
      <Navbar />
      {props.inputVideo && (
        <video
          controls
          width="250"
          height="250"
          src={URL.createObjectURL(props.inputVideo)}
        ></video>
      )}
      <input
        type="file"
        onChange={(e) => {
          if (!e.target.files) return;
          props.setInputVideo(e.target.files[0]);
        }}
      />
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
