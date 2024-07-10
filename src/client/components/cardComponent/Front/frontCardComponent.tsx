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
        <HeaderComponent size="대형" name="유호영" hp={10000} typeIcon="data:image/jpeg;base64,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"/>
      </CardContentComponent>
    </CardComponent>
  );
}

export default FrontCardComponent;