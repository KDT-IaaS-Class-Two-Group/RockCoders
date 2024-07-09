import React from "react";
import IFrameBreaker from "./FrameBreaker.interface";
import StyledFrameBreaker from "./FrameBreaker.style";
import FBPath from "../../../../static/FrameBreakerPath";

const FrameBreaker: React.FC<IFrameBreaker> = () => {
  return (
    <video width="600" controls>
      <source src={FBPath} type="video/mov" />
    </video>
  );
};

export default FrameBreaker;
