import React from "react";
import TFrameBreaker from "./FrameBreaker.type";
import StyledFrameBreaker from "./FrameBreaker.style";
import FrameBreakerObj from "../../../../static/frameBreaker/FrameBreakerObj";

const FrameBreaker: React.FC<TFrameBreaker> = () => {
  return <StyledFrameBreaker src={FrameBreakerObj.fullSrc} />;
};

export default FrameBreaker;
