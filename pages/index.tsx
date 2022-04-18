import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';
import Starter from '../components/registerlogincomponents/starter';
import Footer from '../components/Footer/Footer';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
interface SignUpFunc{
  initialContacts:[]
}

export async function getServerSideProps(){
    const contact = await prisma.contact.findMany();
    return{
      props:{
        initialContacts: contact
      }
    }
  }



const Home:NextPage<SignUpFunc> = ({initialContacts}) => {
  return (
    <div >
      <Head><title>Twitter</title></Head>
      <Starter/>
      <Footer/>
    </div>
  )
}
export default Home;