import { fetchFile } from "@ffmpeg/ffmpeg";
import ffmpeg from "../components/ffmpeg";
import { GifConvertProps } from "../interface/ready";
ffmpeg.setProgress(({ ratio }) => {
  let progress = parseInt((ratio * 100).toString());
  console.log(progress);
  /*
   * ratio is a float number between 0 to 1.
   */
});

export const convertToGif: GifConvertProps = async (
  inputVideo,
  setGif,
  compressionOption
) => {
  const progress = 0;
  const qualityOptions = [
    "fps=10, scale=480:-1",
    "fps=15, scale=720:-1",
    "scale=1080:-1",
  ];
  ffmpeg.FS("writeFile", "test.mp4", await fetchFile(inputVideo));
  // Can use a dictionary to pass options
  await ffmpeg.run(
    "-i",
    "test.mp4",
    "-vf",
    qualityOptions[compressionOption],
    "-f",
    "gif",
    "out.gif"
  );

  const data = ffmpeg.FS("readFile", "out.gif");

  const url = URL.createObjectURL(
    new Blob([data.buffer], { type: "image/gif" })
  );
  setGif(url);
};
