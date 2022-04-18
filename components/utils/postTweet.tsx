import React,{SyntheticEvent, useContext,useState} from 'react';
import { NextPage } from 'next';
// context   
import { ProfileContext } from 'context/ProfileContext';
import { TweetContext } from 'context/TweetContext';

const PostTweet:NextPage = ():JSX.Element => {
  // context deconstruct
    const {currentPicture} = useContext(ProfileContext);
    const [currentProfilePic] = currentPicture;
    const [addTweets,dispatchTweets] = useContext(TweetContext);
    // declared local state
    const [activebutton,setActiveButton] = useState<Boolean>(false)
    const [tweet,setTweet] = useState<string>('')
    // handlers
    const AddTweetHandler = (e:SyntheticEvent) =>{
      let target = e.target as HTMLInputElement
      e.preventDefault();
      setTweet(target.value)
      if(target.value.length > 0){
        setActiveButton(true);
      }else{
        setActiveButton(false);
      }
      
    }
    const sendTweetHandler = ()=> {
      dispatchTweets({type:'ADD_TWEET',payload:{tweet:tweet}});
      setTweet('')
    }

  return (
    <div className='border-b-[1px] border-[#00000310]'>
    <div className='flex'>
        <div className=" ml-[0.5rem] w-[50px]  h-[50px] bg-cover bg-center rounded-full" style={{backgroundImage:`url(${currentProfilePic})`}} ></div>
        <input value={tweet} onChange={(e) =>AddTweetHandler(e)} className='border-b-[1px] border-[#00000310 w-[90%] xl:w-[75%] mx-auto outline-none' type="text" placeholder="What's happening?" />
    </div>
    <div className="tweet-btn w-full flex justify-end py-[1rem] px-[2rem]">
        <button onClick={sendTweetHandler} className={`${activebutton ? 'bg-[#1D9BF0] hover:bg-[#1882c9] cursor-pointer ' : 'bg-[#1d9cf07e] cursor-default'} text-white px-[1rem] py-[0.5rem] rounded-[5rem]  transition-all `} >Tweet</button>
    </div>
    </div>
  )
}

export default PostTweet