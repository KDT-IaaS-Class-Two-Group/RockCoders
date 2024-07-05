import React from 'react';

interface TextComponentProps {
    text: string;
    className?: string;}

const TextComponent: React.FC<TextComponentProps> = ({ text, className = '' }) => {
    // 기본 TailwindCSS 클래스
    const defaultClasses = 'text-base font-normal text-black';

    //스프레드 연산자 (...)로 오른쪽 객체의 속성이 왼쪽 객체의 속성을 덮어쓴다.(객체 스프레드)
    const combinedClasses = `${defaultClasses} ${className}`;

    return <p className={combinedClasses}>{text}</p>;
};

export default TextComponent;