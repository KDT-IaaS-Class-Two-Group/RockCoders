import React, {ReactNode} from "react";

interface CardContentComponentProps {
  className? : string;
  children: ReactNode;
}

const CardContentComponent:React.FC<CardContentComponentProps> = ({className, children}) => {
  return (
    <div className={`w-398 h-562 ${className}`}>
      {children}
    </div>
  );
}

export default CardContentComponent;