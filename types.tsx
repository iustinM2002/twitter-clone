export interface Action{
    type:string,
    payload?:{
        tweet:string
    }
}
export interface dataContact{
    username?:string,
    email:string,
    password:string
}

export interface SignInProps{
    initialContacts:[],
    onSubmit : (data:dataContact) => void;
}
export interface FormValues extends Record<string,any>{
    email:string,
    password:string
}
 export interface ProfileBodyInt{
     currentUserName:string,
     currentProfilePic:string;
 }