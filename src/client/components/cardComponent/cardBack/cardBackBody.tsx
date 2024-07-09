import React from 'react';
import TextComponent from '../textComponent';
import ProgressBar from './progressBar';
import CardBackBodyProps from './interface/CardBackBodyProps';

/**
 * @moonhr 24.07.09
 * @param CardBackBodyProps
 * @returns 개인프로젝트 부분
 */
const CardBackBody:React.FC<CardBackBodyProps> = (props) => {
  return (
    <div className='flex flex-col'>
      <TextComponent text={props.mainText} className='text-3xl' />
      <TextComponent text={props.bodyText} className='text-xs	' />
      <a href={props.githubLink} className='text-sm	font-semibold'>GitHub Link</a>
      <ProgressBar progress={props.progressPercentage} />
    </div>
  );
};

export default CardBackBody;