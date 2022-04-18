import React from 'react';
import { NextPage } from 'next';
// components
import Nav from '../components/homepage/Nav';
import DefaultPage from '../components/homepage/defaultPage';
import Profile from '../components/homepage/Profile/Profile';
import Recommandation from '../components/homepage/Recommandation';
let item_index = 1;
const HomePage:NextPage = ():JSX.Element => {
  return (
    <div className='flex'>
        <Nav/>
        {item_index === 0 ? <DefaultPage/> : ''}
        {item_index === 1 ? <Profile/> : ''}
        <Recommandation/>
    </div>
  )
}

export default HomePage