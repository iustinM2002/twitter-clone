// function to generate random numbers :)
export const randomCommentShareNumber = () => {
    return Math.floor(Math.random() * 10000);
}
export const randomLikeNumber = () =>{
    return (Math.random() * 100).toFixed(1);
}
export const randomIntervalNumber = (min:number,max:number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}