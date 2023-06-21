import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { RecoilRoot } from "recoil";
import Layout from "../Components/Layout";
export default function App({ Component, pageProps }: AppProps) {
  return   <RecoilRoot><ChakraProvider><Layout><Component {...pageProps} /></Layout></ChakraProvider></RecoilRoot>
}
