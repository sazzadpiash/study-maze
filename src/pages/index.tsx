import Head from 'next/head'
import Image from 'next/image'
import { Open_Sans } from 'next/font/google'
import Banner from '@/components/banner/banner'
import styles from '@/styles/Home.module.css'
import ServiceBlog from '@/components/services/ServiceBlog'
import ApplySection from '@/components/applySection/applySection'
const inter = Open_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ServiceBlog></ServiceBlog>
        <ApplySection></ApplySection>
      </div>
    </>
  )
}
