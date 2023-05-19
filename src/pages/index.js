import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import NavBar from '@/components/nabvar/Navbar';
import Carousel from '@/components/carousel/Carousel';
import RandomCards from '@/components/card/RandomCards';
import Footer from '@/components/footer/Footer';
import Chat from '@/components/chat/Chat';
import styles from '@/styles/Home.module.css';
import MainContextProvider, { maincontextState } from '@/context/maincontextprovider';
import DarkMode from '@/components/darkmode/DarkMode';
import Message from '@/components/message/Message';

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
       
        <NavBar></NavBar>
        <DarkMode></DarkMode>
        <Message></Message>
        <Carousel />
        <RandomCards />
        
      </main>
        <Chat />
        <Footer />
        </MainContextProvider>
      </div>
  )
}
