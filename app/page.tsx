"use client";
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })
import { ChakraProvider, Heading,Text } from '@chakra-ui/react'
import Features from './Features';
import Header from './Header';
import Practice from './Practice';
import Practiceadv from './Practice-adv';
import Pricing from './Pricing';

export default function Home() {
  return (
    <ChakraProvider>
      {/* <Practice /> */}
      {/* <Practiceadv /> */}
      <Header />
      <Pricing />
      <Features />
    </ChakraProvider>
  )
}
