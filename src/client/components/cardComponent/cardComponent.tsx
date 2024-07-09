import React, {ReactNode} from "react";

interface CardComponentProps {
  className? : string,
  children? : ReactNode
}

/**
 * @crystal23733 24.07.07
 * @param className 클래스 스타일 
 * @param children 자식요소들
 * @returns div 카드 태그 생성
 */
const CardComponent:React.FC<CardComponentProps> = ({className = '', children}) => {
  return (
    <div className={`bg-gray-300 w-443 h-600 rounded-lg shadow-lg overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

export default CardComponent;