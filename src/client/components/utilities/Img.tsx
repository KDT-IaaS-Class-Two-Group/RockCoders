import React from "react";
import TImg from "./Img.type";

/**
 * @eonduck2 24.07.10
 * * 이미지 컴포넌트를 생성하기 위한 틀
 * @param { string } src 파일 경로와 이름 || 확장자까지 갖고있는 전체 경로
 * @param { string } extension ?.확장자
 * @param { string } rest Image 태그가 가질 수 있는 지정된 속성들 ex) className = "some-class"
 * @returns { JSX.Element } 이미지를 표시하는 img 엘리먼트
 */
const ImageComponent: React.FC<TImg> = ({ src, extension, ...rest }) => {
  const isFullSrc = src !== undefined && extension === undefined;

  const fullSrc = isFullSrc ? src : src! + extension;

  return (
    <picture>
      <source srcSet={fullSrc} />
      <img src={fullSrc} {...rest} />
    </picture>
  );
};

export default ImageComponent;
