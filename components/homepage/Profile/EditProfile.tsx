import React,{useState,useContext} from 'react'
import { ProfileContext } from 'context/ProfileContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { NextPage } from 'next';
import Image from 'next/image';

const EditProfile:NextPage<{setActiveEdit:any}> = ({setActiveEdit}:{setActiveEdit:any}):JSX.Element => {
    const [imageSrc, setImageSrc] = useState('');
    const {currentPicture} = useContext(ProfileContext)
    const [currentProfilePic,setCurrentProfilePic] = currentPicture;

    function handleOnChange(changeEvent:any) {
        const reader = new FileReader();
        reader.onload = function(onLoadEvent:any) {
          setImageSrc(onLoadEvent.target.result);

        }
    
        reader.readAsDataURL(changeEvent.target.files[0]);
      }

  async function handleOnSubmit(event:any) {
    event.preventDefault();
    const form:any = event.currentTarget;
    const fileInput:any = Array.from(form.elements).find((elemen:any) => elemen.name === 'file')
    const formData = new FormData();
    for(const file of fileInput.files){
        formData.append('file', file)
    }

    formData.append('upload_preset', 'my-uploads')
    const data = await fetch('https://api.cloudinary.com/v1_1/zziustin145/image/upload',{
        method:'POST',
        body: formData
    }).then(r => r.json());
    setImageSrc(data.secure_url);
    setCurrentProfilePic(data.secure_url)
    sessionStorage.setItem('profilePic',data.secure_url)
  }

  return (
    <div className='fixed w-[100%] min-h-[100vh]  bg-[#6d6d6d84] top-0 left-0 z-10 flex justify-center items-center'>
        <div className="edit bg-white rounded-[1rem] relative">
        <FontAwesomeIcon onClick={() => setActiveEdit(false)} className='cursor-pointer text-black absolute top-[0.5rem] left-[0.5rem] text-[1.2rem] px-[0.7rem] py-[0.45rem] transition-all hover:bg-[#a1a1a16d] rounded-full' icon={faXmark}/>
        <form  method="post"  onSubmit={handleOnSubmit} onChange={handleOnChange} className='flex flex-col justify-center items-center min-h-[30vh] w-full '>
          <p>
          <label htmlFor="file" className="btn cursor-pointer flex justify-center bg hover:underline">Select Profile Image</label>
            <input className='invisible' id='file' type="file" name="file" placeholder='update' />
          </p>
            <div className='w-[100px] h-[100px] bg-cover bg-center m-[1rem] rounded-full' style={{backgroundImage:`url(${imageSrc})`}}></div>
            {imageSrc.length > 1 ? <button className=' border-[1px] border-black p-[0.5rem] rounded-[1rem] font-bold'>Upload Files</button> : ''}
        </form>
        </div>
    </div>
  )
}

export default EditProfile