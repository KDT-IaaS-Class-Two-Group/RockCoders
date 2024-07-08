import React from 'react';
import TextComponent from '../textComponent';
import ProgressBar from './progressBar';

interface CardBackBodyProps {
  mainText : string
  bodyText : string
  githubLink : string
  progressPercentage : number
}

const CardBackBody:React.FC<CardBackBodyProps> = ({mainText, bodyText, githubLink, progressPercentage}) => {
  return (
    <div className=''>
      <TextComponent text={mainText} className='' />
      <TextComponent text={bodyText} className='' />
      <a className=''>{githubLink}</a>
      <ProgressBar progress={progressPercentage} />
    </div>
  );
};

export default CardBackBody;