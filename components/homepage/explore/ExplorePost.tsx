import React from 'react';
import { NextPage } from 'next';

const ExplorePost:NextPage<{user:any}> = ({user}:{user:any}):JSX.Element => {
  return (
    <div className='flex flex-col items-center py-[1rem]'>
        <h2 className='font-bold text-[1.2rem]'>{user.name.first + ' ' + user.name.last}</h2>
        <h3>{user.email}</h3>
        <h4>{user.phone}</h4>
        <div className=" w-[70%]  h-[250px] bg-cover bg-center "  style={{backgroundImage:`url(${user.picture.large})`}}></div>
    </div>
  )
}

export default ExplorePost