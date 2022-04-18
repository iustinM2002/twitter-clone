import  React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser,faHashtag, faBell, faEnvelope,faBookBookmark,faList,faEllipsis} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
const liStyle = `text-[1.3rem] w-[15rem]  py-[0.5rem]  px-[2rem] hover:bg-[#00000036] flex items-center  rounded-[5rem] my-[0.2rem] transition-all lg:px-[0rem] lg:hover:bg-transparent`;
const iconStyle= `px-[0.9rem] lg:hover:bg-[#00000036] lg:py-[0.9rem] lg:rounded-full transition-all lg:px-[0rem]`;
const spanClass = `lg:hidden`;

const Nav = () => {
  return (
    <nav className="min-h-[100vh] flex flex-col w-[20%]  lg:min-h-[10%]  bg-white  semi-tall:hidden">
            
  

      <ul className="nav-links flex flex-col mx-[2rem] w-full text-left">
         <li className={`${liStyle} text-[#1D9BF0] text-[1.8rem]`}><FontAwesomeIcon className={iconStyle} icon={faTwitter}/></li>
         <li className={liStyle}><FontAwesomeIcon className={iconStyle} icon={faHouseUser}/><span className={spanClass}>Home</span> </li>
         <li className={liStyle}><FontAwesomeIcon className={iconStyle} icon={faHashtag}/><span className={spanClass}>Explore</span>  </li>
         <li className={liStyle}><FontAwesomeIcon className={iconStyle} icon={faBell}/> <span className={spanClass}>Notifications</span> </li>
         <li className={liStyle}><FontAwesomeIcon className={iconStyle} icon={faEnvelope}/><span className={spanClass}>Messages</span>  </li>
         <li className={liStyle}><FontAwesomeIcon className={iconStyle} icon={faBookBookmark}/><span className={spanClass}> BookMarks</span> </li>
         <li className={liStyle}><FontAwesomeIcon className={iconStyle} icon={faList}/><span className={spanClass}>  Lists</span></li>
         <li className={liStyle}><FontAwesomeIcon className={iconStyle} icon={faHouseUser}/> <span className={spanClass}> Profile</span></li>
         <li className={liStyle}><FontAwesomeIcon className={iconStyle} icon={faEllipsis}/><span className={spanClass}>  More</span></li>
     </ul> 
   
     <div  className="flex w-full mx-[2rem] my-[0.5rem]">
     <button className="tweet-button bg-[#36a1f8]  mx-[2rem] px-[4rem] py-[0.6rem] text-white rounded-[2rem] lg:mx-[0rem] lg:px-[1.2rem] ">Tweet</button>

     </div>

 </nav>
  )
}

export default Nav