import { createFFmpeg } from "@ffmpeg/ffmpeg";
const ffmpeg = createFFmpeg({
  corePath: "https://unpkg.com/@ffmpeg/core@0.10.0/dist/ffmpeg-core.js",
  log: true,
});

export async function load() {
  await ffmpeg.load();
}

export default ffmpeg;
