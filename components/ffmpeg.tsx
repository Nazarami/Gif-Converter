import { createFFmpeg } from "@ffmpeg/ffmpeg";
const ffmpeg = createFFmpeg({
  corePath: "https://unpkg.com/@ffmpeg/core@0.10.0/dist/ffmpeg-core.js",
  log: false,
});

export async function load() {
  if (!ffmpeg.isLoaded()) {
    await ffmpeg.load();
  }
}

export default ffmpeg;
