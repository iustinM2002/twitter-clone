import '@/styles/global.css'
import type { AppProps } from 'next/app';
// providers
import { LoginProvider } from '../context/LoginContext';
import { ProfileProvider } from '../context/ProfileContext';
import {TweetProvider} from '../context/TweetContext';
import {RandomUserProvider} from 'context/randomUserContext';
import {  } from 'react-query';
import { Hydrate,QueryClient,QueryClientProvider } from 'react-query';
const client = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return <QueryClientProvider client={client}><Hydrate state={pageProps.dehydratedState}><LoginProvider><ProfileProvider><RandomUserProvider><TweetProvider><Component {...pageProps} /></TweetProvider></RandomUserProvider></ProfileProvider></LoginProvider>/</Hydrate></QueryClientProvider>
}
