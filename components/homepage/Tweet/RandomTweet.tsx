import React from 'react';
import Reaction from '../../utils/Reaction';
import { NextPage } from 'next';

const RandomTweet:NextPage<{user:any,text:string}> = ({user,text}):JSX.Element => {
  return (
    <div className='border-b-[1px] border-[#00000310]'>
    <div className="flex py-[1rem]  ">
        <div className=" mx-[0.5rem] w-[60px]  h-[50px] bg-cover bg-center rounded-full"  style={{backgroundImage:`url(${user.picture.large})`}}></div>
        <div className=" mx-[0.5rem]">
            <div className="username flex">
            <h4 className='px-[0.3rem] font-bold '>{user.name.first + " " + user.name.last}</h4>
            <h5 className='text-[#0000008a]' >{`@${user.name.first.toLowerCase() + user.name.last.toLowerCase()}`}</h5> 
            </div>
            <p className='px-[0.5rem]'>{text}</p>
        </div>
    </div>
    <Reaction/>
</div>
  )
}

export default RandomTweet