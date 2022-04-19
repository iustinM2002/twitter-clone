import React, { useContext } from 'react';
import { NextPage } from 'next';
// components
import Nav from '../components/homepage/Nav';
import DefaultPage from '../components/homepage/defaultPage';
import Profile from '../components/homepage/Profile/Profile';
import Messages from '../components/homepage/messages/Messages';
import Recommandation from '../components/homepage/Recommandation';
import {NavContext} from '../context/NavContext'
import Explore from '../components/homepage/explore/Explore';
let item_index = 0;
const HomePage:NextPage = ():JSX.Element => {
  const [navIndex] = useContext(NavContext)
  return (
    <div className='flex justify-center'>
        <Nav/>
        {navIndex === 0 ? <DefaultPage/> : ''}
        {navIndex ===1 ? <Explore/>: ''}
        {navIndex === 3 ? <Messages/> : ''}
        {navIndex === 6 ? <Profile/> : ''}
        <Recommandation/>
    </div>
  )
}

export default HomePage