import TFrameBreakerObj from "./FrameBreakerObj.type";
// import pathGetter from "../../src/utilities/pathGetter";

const path = "./assets/gifs/";
const fileName = "frame_breaker";
const extension = ".gif";
const fullSrc = path + fileName + extension;

const FrameBreakerObj: TFrameBreakerObj = {
  path: path,
  fileName: fileName,
  extension: extension,
  fullSrc: fullSrc
};

export default FrameBreakerObj;
