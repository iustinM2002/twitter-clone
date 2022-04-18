import React,{useContext} from 'react';
import { randomIntervalNumber } from '../../utils/utils';
import { RandomContext } from 'context/randomUserContext';
import RandomTweet from './RandomTweet';

const RandomTweets = () => {
  const [randomUserQuery,randomIpsumQuery] = useContext(RandomContext);
  return (
    <div>
      {randomUserQuery.data.results.map((user:any,index:number) =><RandomTweet user={user} text={randomIpsumQuery.data[index].very_long_sentence}/> )}
    </div>
  )
}

export default RandomTweets