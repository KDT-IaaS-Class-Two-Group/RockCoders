import React from "react";
import CardComponent from "../cardComponent";
import TextComponent from "../textComponent";
import ImgComponent from "../imgComponent";

interface FrontCardComponentProps {
  name: string;
  size: '소형' | '중형' | '대형';
  hp: number;
  typeIcon: string;
  className? : string
}

const FrontCardComponent:React.FC<FrontCardComponentProps> = ({name, size, hp, typeIcon, className}) => {
  return (
    <CardComponent className={`relative ${className}`}>
      <div className="relative">
      {/* 크기 타입 텍스트 - 왼쪽 상단 */}
      <TextComponent text={size} className="absolute top-2 left-2 text-xs text-gray-500" />
      
      {/* 포켓몬 이름 - 중앙 상단 */}
      <TextComponent text={name} className="absolute top-2 left-1/2 transform -translate-x-1/2 text-lg font-bold" />
      
      {/* HP 정보 - 오른쪽 상단 */}
      <div className="absolute top-2 right-2 flex items-center">
        {/* HP 텍스트 */}
        <TextComponent text="HP" className="text-sm text-gray-400 mr-1" />
        
        {/* HP 숫자 */}
        <TextComponent text={`${hp}`} className="text-sm font-bold" />
        
        {/* 타입 이미지 */}
        <ImgComponent imgUrl={typeIcon} alt="type" className="w-6 h-6 ml-1" />
      </div>
    </div>
    </CardComponent>
  );
}

export default FrontCardComponent;