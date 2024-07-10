import TFrameBreakerObj from "./FrameBreakerObj.type";
import path from "node:path";

const FrameBreakerObj: TFrameBreakerObj = {
  path: path.resolve("assets", "gifs"),
  fileName: "frame_breaker",
  extension: "gif"
};

export default FrameBreakerObj;
