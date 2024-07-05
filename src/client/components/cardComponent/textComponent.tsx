import React from 'react';

//textComponent 함수의 interface 정의
interface TextComponentProps {
    text: string;
    className?: string;}

/**
 * @moonhr 24.07.05
 * * 카드 제작에 사용될 기본 textComponent
 * @param text="" className="" 으로 작성하면 됨.
 * @returns p태그
 */
const TextComponent: React.FC<TextComponentProps> = ({ text, className = '' }) => {
    // 기본 TailwindCSS 클래스
    const defaultClasses = 'text-base font-normal text-black';

    //클래스 병합
    const combinedClasses = `${defaultClasses} ${className}`;

    return <p className={combinedClasses}>{text}</p>;
};

export default TextComponent;