import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Carousel from '@/components/Carousel';
import RandomCards from '@/components/RandomCards';
import Chat from '@/components/Chat';
import styles from '@/styles/Home.module.css';
import MainContextProvider, { maincontextState } from '@/context/maincontextprovider';
import Barra from '@/components/Navbar';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Pedilo Ya</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/P.png" />
      </Head>
      <MainContextProvider> 
      <main className={styles.main}> 
        <Barra></Barra>
        <Carousel />
        <RandomCards />        
      </main>
        <Chat />
        </MainContextProvider>
      </div>
  )
}
