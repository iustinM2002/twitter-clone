import React,{createContext,useReducer} from 'react';
import {TweetReducer,initialTweet} from '../reducers/TweetReducer';

type initialValue = [
    addTweets:string[] | any,
    dispatchTweets:any
]

let initValue!:initialValue;
export const TweetContext = createContext(initValue);

export const TweetProvider = (props:any) => {
    const [addTweets,dispatchTweets] = useReducer(TweetReducer,initialTweet)
  return (
    <TweetContext.Provider value={[addTweets,dispatchTweets]} >
        {props.children}
    </TweetContext.Provider>
  )
}

export default TweetProvider