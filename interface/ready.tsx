export interface ReadyProps {
  inputVideo: File | undefined;
  setInputVideo: React.Dispatch<React.SetStateAction<File | undefined>>;
  gif: string;
  setGif: React.Dispatch<React.SetStateAction<string>>;
}

export interface GifConvertProps {
  (
    inputVideo: File,
    setGif: React.Dispatch<React.SetStateAction<string>>,
    compressionOption: number
  ): Promise<void>;
}
