import BottomBar from "./BottomBar";
import Body from "./body";
import TopBar from "../BeforeUpload/TopBar";
import { useContext } from "react";
import { videoContext } from "Context";
function Main() {
  const { video } = useContext(videoContext);
  if (!video) return null;
  return (
    <div>
      <TopBar />
      <Body video={video} />
      <BottomBar video={video} />
    </div>
  );
}

export default Main;
