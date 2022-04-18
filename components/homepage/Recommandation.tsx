import React,{useContext} from 'react';
// components
import Company from './company';
//context
import { RandomContext } from 'context/randomUserContext';

const Recommandation = () => {
    const [randomUsersQuery,randomIpsumQuery,randomCompanyQuery] = useContext(RandomContext);
    console.log(randomCompanyQuery.data)
  return (
    <div className='w-[400px] h-[320px] bg-[#efefef] 2xl:hidden rounded-[2rem] m-[2rem]' >
        <h3 className='font-bold p-[1rem] text-[1.3rem]'>You might like</h3>
        {randomCompanyQuery.data.map((company:any) => <Company company={company}/>)}

    </div>
  )
}

export default Recommandation