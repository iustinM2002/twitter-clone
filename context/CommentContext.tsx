import React,{useState,createContext} from 'react';
let initValue:any;
export const CommentContext = createContext(initValue);

export const CommentProvider = (props:any) => {
    const [activeCom,setActiveCom] = useState(false);
    const [comment,setComment] = useState<string>('');
    const [comments,setComments] = useState<string[]>([]);
    const [replyedUsername,setReplyedUsername] = useState<string[]>([]);

  return (
    <CommentContext.Provider value={{activeComment:[activeCom,setActiveCom],commentLib:[comment,setComment],commentsLib:[comments,setComments],replyUser:[replyedUsername,setReplyedUsername]}}>
        {props.children}
    </CommentContext.Provider>
  )
}

