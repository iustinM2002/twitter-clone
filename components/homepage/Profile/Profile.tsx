import React, { useContext, useEffect } from 'react';
import { NextPage } from 'next';
import { ProfileContext } from 'context/ProfileContext';
// components
import ProfileBody from './ProfileBody';
import WhoToFollow from './WhoToFollow';


const Profile:NextPage = () : JSX.Element => {
    // context deconstruct
    const {currentUsername,currentPicture} = useContext(ProfileContext)
    const [currentUserName,setCurrentUsername] = currentUsername;
    const [currentProfilePic,setCurrentProfilePic] = currentPicture;
    // uploading name and profile image on sessionStorage
    useEffect(()=>{
        setCurrentProfilePic(sessionStorage.getItem('profilePic'));
        setCurrentUsername(sessionStorage.getItem('username'))
    },[])
    
  return (
        <div className='border-[1px] border-[#00000310] w-[45%] lg:w-full mx-[1rem]  lg:ml-[5rem]'>
    <h3 className='p-[1rem] text-[1.2rem] font-bold'>{currentUserName}</h3>
    <ProfileBody currentUserName={currentUserName} currentProfilePic={currentProfilePic}/>
    <WhoToFollow/>
</div>
  )
}

export default Profile