import React from 'react';
import TextComponent from '../textComponent';
import ProgressBar from './progressBar';
import CardBackBodyProps from './interface/CardBackBodyProps';

interface CardBackBodyComponentProps {
  className?: string;
  props: CardBackBodyProps;
}

/**
 * @moonhr 24.07.09
 * @param className
 * @param 개인프로젝트 객체
 * @returns 개인프로젝트 부분
 */
const CardBackBody:React.FC<CardBackBodyComponentProps> = ({className, props}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <TextComponent text={props.mainText} className='!text-2xl !font-semibold' />
      <TextComponent text={props.bodyText} className='text-xs	' />
      <a href={props.githubLink} className='text-sm	font-semibold'>GitHub Link</a>
      <ProgressBar progress={props.progressPercentage} />
    </div>
  );
};

export default CardBackBody;