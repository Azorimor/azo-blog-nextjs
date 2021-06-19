import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import SiteLayout from '../components/layouts/siteLayout'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <SiteLayout>
      <Head>
        <title>CHANGME</title>
      </Head>
      <h1>Homepage</h1>
    </SiteLayout>
  )
}
