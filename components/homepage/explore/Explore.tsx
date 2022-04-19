import React,{useContext} from 'react'
import { RandomContext } from 'context/randomUserContext';
import ExplorePost from './ExplorePost';
const Explore = () => {
    const [randomUsersQuery,randomIpsumQuery,randomCompanyQuery] = useContext(RandomContext);
    
  return (
    <div className='border-[1px] border-[#00000310] w-[45%] lg:w-full mx-[1rem]  lg:ml-[5rem]'>
    <h3 className='p-[1rem] text-[1.2rem] font-bold'>Explore</h3>
    {randomUsersQuery.data.results.map((user:any) => <ExplorePost user={user}/>)}
    </div>
  )
}

export default Explore