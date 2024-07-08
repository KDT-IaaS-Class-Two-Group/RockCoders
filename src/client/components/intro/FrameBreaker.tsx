import React from "react";
import IFrameBreaker from "./FrameBreaker.interface";
import StyledFrameBreaker from "./FrameBreaker.style";
import FB from "../../../../public/assets/gifs/frame_breaker.gif";

const FrameBreaker: React.FC<IFrameBreaker> = () => {
  return <StyledFrameBreaker src="./assets/gifs/frame_breaker.gif" />;
};

export default FrameBreaker;
