import React,{useContext} from 'react';
import { NextPage } from 'next';
// import components
import Tweet from './Tweet';
// context
import { TweetContext } from 'context/TweetContext';

const Tweets:NextPage = ():JSX.Element => {
    const [addTweets] = useContext(TweetContext);
  return (
    <div>  
        {addTweets.map((tweet:string) => <Tweet tweet={tweet}/>)}
    </div>
  )
}

export default Tweets;