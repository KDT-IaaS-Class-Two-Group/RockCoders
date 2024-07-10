import React from "react";
import TImg from "./Img.type";

const ImageComponent: React.FC<TImg> = ({ src, ...rest }) => {
  return <img src={src} {...rest} />;
};

export default ImageComponent;
