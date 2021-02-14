import Head from 'next/head'
import Layout from '../components/layout'
import Footer from '../components/footer'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main"></main>

      <Footer />
    </Layout>
  )
}
