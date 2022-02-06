import { createContext } from "react";

export type VideoContextType = {
  video: File | undefined;
  setVideo: (video: File) => void;
};

export const videoContext = createContext<VideoContextType>({
  video: undefined,
  setVideo: () => {},
});
