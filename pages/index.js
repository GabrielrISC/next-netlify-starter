import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>GeoAcademy!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hola mundo</h1>
        <p className="description">
          Hola que hace <code>geoacademy</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
