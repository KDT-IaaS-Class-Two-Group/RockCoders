import React from 'react';
import TextComponent from '../textComponent';
import ImgComponent from '../imgComponent';

interface CardBackTitle {
  className?: string;
}

const CardBackTitle:React.FC<CardBackTitle> = ({className}) => {
  return (
    <div className={`grid grid-cols-2 grid-rows-3 ${className}`}>
      <TextComponent text='Rock' className='!font-black !text-5xl col-start-1' />
      <TextComponent text='Coders' className='!font-black !text-5xl col-start-1' />
      <TextComponent text='Personal Project' className='font-semibold !text-xl col-start-1' />
      <ImgComponent imgUrl='../../../../Img/rock.png' alt='주먹' className='w-16 col-start-2 row-start-1 justify-self-end' />
    </div>
  );
};

export default CardBackTitle;