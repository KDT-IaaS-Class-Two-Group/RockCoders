import React from "react";

interface imgComponentProps {
  imgUrl : string,
  alt? : string,
  className? : string
}

const imgComponent: React.FC<imgComponentProps> = ({imgUrl,alt = '' ,className = ''}) => {
  return <img src="{imgUrl}" alt="" className="{className}"/>;
}

export default imgComponent;