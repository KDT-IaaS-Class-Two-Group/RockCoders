import React from "react";
import TFrameBreaker from "./FrameBreaker.type";
import StyledFrameBreaker from "./FrameBreaker.style";
import FBPath from "../../../../static/FrameBreakerPath";

const FrameBreaker: React.FC<TFrameBreaker> = () => {
  return <StyledFrameBreaker src={FBPath} />;
};

export default FrameBreaker;
