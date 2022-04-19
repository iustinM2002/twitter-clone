import React,{useContext,useState} from 'react';
import { NextPage } from 'next';
// components
import CommentSec from './comments/CommentSec';
import Reaction from '../../utils/Reaction';
// context
import { ProfileContext } from 'context/ProfileContext';
import { CommentContext } from 'context/CommentContext';

const Tweet:NextPage<{tweet:string}> = ({tweet}):JSX.Element => {
    // deconstruct context
    const {currentPicture,currentUsername} = useContext(ProfileContext);
    const {activeComment,commentLib,commentsLib} = useContext(CommentContext)
    const [activeCom] = activeComment
    const [currentProfilePic] = currentPicture;
    const [currentUserName] = currentUsername;
    const [comment,setComment] =commentLib;
    const [comments,setComments] = commentsLib;

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
          {activeCom ? <CommentSec comment={comment} setComment={setComment} comments={comments} setComments={setComments} username={currentUserName}/> : ''}
          <Reaction/>
      </div>
    )
}

export default Tweet