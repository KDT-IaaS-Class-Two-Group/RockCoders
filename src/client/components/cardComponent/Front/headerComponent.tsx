import React from "react";
import TextComponent from "../textComponent";
import ImgComponent from "../imgComponent";

interface HeaderComponentProps {
  name: string;
  size: '소형' | '중형' | '대형';
  hp: number;
  typeIcon: string;
}


/**
 * @crystal23733 24.07.10
 * @param size 사이즈 타입
 * @param name 개인 이름
 * @param hp hp량(숫자)
 * @param typeIcon 격투타입 이미지
 * @returns 카드 헤더 컴포넌트
 */
const HeaderComponent:React.FC<HeaderComponentProps> = ({name, size, hp, typeIcon}) => {
  return (
    <div className='relative h-8'>
      {/* 크기 타입 텍스트 - 왼쪽 상단 */}
      <TextComponent text={size} className="flex justify-center items-center w-20 h-7 rounded-xl absolute top-0 left-0 text-base text-gray-500 bg-gray-300 shadow-custom" />
      
      {/* 이름 - 중앙 상단 */}
      <TextComponent text={name} className="absolute top-2 left-36 transform -translate-x-1/2 !text-2xl !font-black" />
      
      {/* HP 정보 - 오른쪽 상단 */}
      <div className="absolute top-2 right-2 flex items-center">
        {/* HP 텍스트 */}
        <TextComponent text="HP" className="text-xs text-gray-400 mr-1" />
        
        {/* HP 숫자 */}
        <TextComponent text={`${hp}`} className="!text-2xl !font-black" />
        
        {/* 타입 이미지 */}
        <ImgComponent imgUrl={typeIcon} alt="type" className="w-29.7 h-29.7 ml-1" />
      </div>
    </div>
  );
}

export default HeaderComponent;