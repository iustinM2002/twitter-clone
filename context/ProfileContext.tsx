import React,{createContext,useState,useReducer} from 'react';


interface initialValue{
    currentPicture:[
        currentProfilePic:string,
        setCurrentProfilePic:any
    ],
    currentUsername:[
        currentUserName:string,
        setCurrentUsername:any
    ],
}

let initValue!:initialValue;
export const ProfileContext = createContext(initValue)

export const ProfileProvider = (props:any) => {
    const [currentProfilePic,setCurrentProfilePic] = useState<string>('https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png');
    const [currentUserName,setCurrentUsername] = useState<string>('username')
  return (
    <ProfileContext.Provider value={{currentPicture:[currentProfilePic,setCurrentProfilePic],currentUsername:[currentUserName,setCurrentUsername]}}>{props.children}</ProfileContext.Provider>
  )
}

