import React,{useContext} from 'react';
import { NextPage } from 'next';
// components
import RandomTweet from './RandomTweet';
// context
import { RandomContext } from 'context/randomUserContext';

const RandomTweets:NextPage = ():JSX.Element => {
  const [randomUserQuery,randomIpsumQuery] = useContext(RandomContext);
  return (
    <div>
      {randomUserQuery.data.results.map((user:any,index:number) =><RandomTweet user={user} text={randomIpsumQuery.data[index].very_long_sentence}/> )}
    </div>
  )
}

export default RandomTweets