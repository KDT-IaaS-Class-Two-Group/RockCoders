import React from "react";

interface ImgComponentProps {
  imgUrl : string,
  alt? : string,
  className? : string
}

/**
 * @crystal23733 24.07.07
 * 카드 제작에 사용될 이미지
 * @param imgUrl 이미지의 주소값
 * @param alt 내용설명
 * @param className 클래스 명
 * @returns img태그
 */
const ImgComponent: React.FC<ImgComponentProps> = ({imgUrl, alt = '', className = ''}) => {
  return <img src={imgUrl} alt={alt} className={className} />;
};

export default ImgComponent;