import React from "react";
import TElement from "./Element.type";

/**
 * @eonduck2 24.07.10
 * * 이미지 컴포넌트를 생성하기 위한 틀
 * @param { string } tagName 태그(엘리먼트) 이름
 * @param { string } rest Image 태그가 가질 수 있는 지정된 속성들 ex) className = "some-class"
 * @returns { JSX.Element } 생성된 Element
 */
const Element: React.FC<TElement> = ({ tagName, ...rest }) => {
  const TagName = tagName.toLowerCase();
  return React.createElement(TagName, { ...rest });
};

export default Element;
