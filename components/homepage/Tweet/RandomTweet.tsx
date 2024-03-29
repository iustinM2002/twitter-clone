import React,{useContext} from 'react';
import { NextPage } from 'next';
// components
import Reaction from '../../utils/Reaction';
import CommentSec from './comments/CommentSec';
// context
import { CommentContext } from 'context/CommentContext';

const RandomTweet:NextPage<{user:any,text:string}> = ({user,text}):JSX.Element => {
  const {activeComment,commentLib,commentsLib} = useContext(CommentContext)
  const [activeCom,setActiveCom] = activeComment
  const [comment,setComment] =commentLib;
  const [comments,setComments] = commentsLib
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
      {activeCom ? <CommentSec comment={comment} setComment={setComment} comments={comments} setComments={setComments} username={user.name.first + " " + user.name.last}/> : ''}
  </div>
  )
}

export default RandomTweet