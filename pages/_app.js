import React from 'react'
import Head from 'next/head'

import Layout from '../layouts/Layout'

import './reset.css'
import './common.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Conductor</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;800&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
