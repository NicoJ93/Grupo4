import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Barra from '@/components/nav';
import Carousel from '@/components/Carousel';
import RandomCards from '@/components/RandomCards';
import Footer from '@/components/Footer';
 
export default function Home() {

  return (
    <div>
      <Head>
        <title>Pedilo Ya</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/P.png" />
      </Head>
      <main>
        <Barra />
      </main>
      <body>
        <Carousel />
        <RandomCards />
      </body>
      <Footer />
    </div>
  )
}
