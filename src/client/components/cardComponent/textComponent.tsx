import React from 'react';
import classNames from 'classnames';

//textComponent 함수의 interface 정의
interface TextComponentProps {
    text: string;
    className?: string;
}

/**
 * @moonhr 24.07.05
 * * 카드 제작에 사용될 기본 textComponent
 * @param classname
 * @returns p태그
 */
const TextComponent: React.FC<TextComponentProps> = ({ text, className = '' }) => {
  // 기본 TailwindCSS 클래스
  const defaultClasses = 'text-base font-normal text-black';
  //클래스 병합
  // const combinedClasses = `${defaultClasses} ${className}`;
  const combinedClasses = classNames(defaultClasses, className);

  return <p className={combinedClasses}>{text}</p>;
};

export default TextComponent;