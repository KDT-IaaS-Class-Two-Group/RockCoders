import React from "react";

interface ImgComponentProps {
  imgUrl : string,
  alt? : string,
  className? : string
}

const ImgComponent: React.FC<ImgComponentProps> = ({imgUrl,alt = '',className = ''}) => {
  return <img src={imgUrl} alt={alt} className={className} />;
}

export default ImgComponent;