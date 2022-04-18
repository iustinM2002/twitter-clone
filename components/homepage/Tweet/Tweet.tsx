import React,{useContext} from 'react';
import { NextPage } from 'next';
// components
import Reaction from '../../utils/Reaction';
// context
import { ProfileContext } from 'context/ProfileContext';

const Tweet:NextPage<{tweet:string}> = ({tweet}) => {
    // deconstruct context
    const {currentPicture,currentUsername} = useContext(ProfileContext);
    const [currentProfilePic] = currentPicture;
    const [currentUserName] = currentUsername
  return (
    <div className='border-b-[1px] border-[#00000310]'>
        <div className="flex py-[1rem] px-[0.5rem] ">
            <div className=" ml-[0.5rem] w-[50px]  h-[50px] bg-cover bg-center rounded-full"  style={{backgroundImage:`url(${currentProfilePic})`}}></div>
            <div className="px-[0.5rem]">
                <div className="username flex ">
                <h4 className='px-[0.3rem] font-bold '>{currentUserName}</h4>
                <h5 className='text-[#0000008a]' >{"@" + currentUserName.toLocaleLowerCase()}</h5>
                </div>
                <p className='px-[0.3rem]'>{tweet}</p>
            </div>
        </div>
        <Reaction/>
    </div>
  )
}

export default Tweet