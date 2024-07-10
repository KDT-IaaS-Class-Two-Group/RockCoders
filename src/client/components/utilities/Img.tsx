import React from "react";
import TImg from "./Img.type";

const ImageComponent: React.FC<TImg> = ({ src, extension, ...rest }) => {
  const fullSrc = src + "." + extension;
  return <img src={fullSrc} {...rest} />;
};

export default ImageComponent;
