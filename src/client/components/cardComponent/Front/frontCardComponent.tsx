import React from "react";
import CardComponent from "../cardComponent";
import HeaderComponent from "./headerComponent";
import CardContentComponent from "./cardContentComponent";

interface FrontCardComponentProps {
  className? : string
}

const FrontCardComponent:React.FC<FrontCardComponentProps> = ({className}) => {
  return (
    <CardComponent className={`relative ${className}`}>
      <CardContentComponent className="bg-blue-200 rounded-lg relative">
        <HeaderComponent size="대형" name="유호영" hp={10000} typeIcon='../../img/개인아이콘_대지 1.png' />
      </CardContentComponent>
    </CardComponent>
  );
}

export default FrontCardComponent;