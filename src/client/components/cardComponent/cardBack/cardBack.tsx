import React from 'react';
import CardBackTitle from "./cardBackTitle";
import CardBackBody from "./cardBackBody";
import CardBackBodyProps from './interface/CardBackBodyProps';
import CardComponent from '../cardComponent';

const CardBack:React.FC<CardBackBodyProps> = (props) => {
  return (
    <CardComponent className='!bg-gray-300 !rounded-3xl flex flex-col justify-center items-center'>
      <CardBackTitle className='w-5/6'></CardBackTitle>
      <div className=' bg-gray-200 rounded-2xl flex flex-col justify-center items-center gap-1 shadow-inner'>
        <CardBackBody className='w-11/12 bg-gray-200 p-7 rounded-xl  ' props={props}></CardBackBody>
        <CardBackBody className='w-11/12 bg-gray-200 p-7 rounded-xl  ' props={props}></CardBackBody>
      </div>
    </CardComponent>
  );
};

export default CardBack;