import React from 'react';
import { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot , faLink , faCalendar} from '@fortawesome/free-solid-svg-icons';
import { ProfileBodyInt } from 'types';
import { randomCommentShareNumber } from '@/components/utils/utils';

const ProfileBody:NextPage<ProfileBodyInt> = ({currentUserName,currentProfilePic}):JSX.Element => {
  return (
    <div className=''>
    <div className={`profile-background min-h-[15rem] bg-[#CFD9DE] w-full bg-center bg-cover`}></div>
    <div className="profile-description relative pl-[1rem] border-b-[0.5px]">
        <div className="profile-img">
            <div className="w-[8rem] min-h-[8rem] rounded-[100%] absolute top-[-75%] left-[5%] border-[5px] border-white bg-cover bg-center" style={{backgroundImage:`url(${currentProfilePic})`}}></div>
        </div>
        <div className="first-row flex flex-col  py-[0.3rem] mt-[3rem]">
            <div className="verift-row flex">
            <p className="text-xl font-bold">{currentUserName}</p>
            
            </div>
            <p className="text-[#646464e0]">{`@${currentUserName.toLowerCase()}`}</p>
            <p className="text-[1rem] py-[0.5rem]" >What's happening?!</p>
        </div>
        <div className="profile-about-section">
            <div className="date-joined flex">
                <FontAwesomeIcon className="text-[#646464e0] mt-1 mr-1" icon={faCalendar}/>
                <p className="text-[#646464e0] ">Joined 2022</p>
            </div>
            <div className="followers flex pb-[1rem]">
                <p className="text-[#646464e0] pr-[1rem]"><span className="font-bold pr-[0.5rem] text-black">{randomCommentShareNumber()}</span>Following</p>
                <p className="text-[#646464e0]"><span className="font-bold pr-[0.5rem] text-black">{randomCommentShareNumber()}</span>Followers</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ProfileBody