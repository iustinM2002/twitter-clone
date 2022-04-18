import React,{createContext,useState} from 'react';
import { QueryClient,dehydrate,useQuery } from 'react-query';
type initalValue = any;
let initValue!:initalValue;
export const RandomContext = createContext(initValue)

 const randomUsers= async () => await(await fetch('https://randomuser.me/api/?results=50')).json()
 const randomIpsum= async () => await(await fetch('https://random-data-api.com/api/lorem_ipsum/random_lorem_ipsum?size=50')).json()
 const randomCompany= async () => await(await fetch('https://random-data-api.com/api/company/random_company?size=3')).json()

export const RandomUserProvider = (props:any) => {
  const randomUsersQuery = useQuery('random_users', randomUsers);
  const randomIpsumQuery = useQuery('random_ipsum', randomIpsum);
  const randomCompanyQuery = useQuery('random_compnay', randomCompany);
  if(randomIpsumQuery.isLoading || randomUsersQuery.isLoading || randomCompanyQuery.isLoading){
    return <div>isLoading</div>
  }
  return (
    <RandomContext.Provider value={[randomUsersQuery,randomIpsumQuery,randomCompanyQuery]}>{props.children}</RandomContext.Provider>
  )
}
export async function getServerSideProps(){
  const client = new QueryClient();
  await client.prefetchQuery('random_users',randomUsers);
  await client.prefetchQuery('random_ipsum', randomIpsum);
  await client.prefetchQuery('random_company', randomCompany);

  return {
    props:{dehydratedState : dehydrate(client)}
  }

}

