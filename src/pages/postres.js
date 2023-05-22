import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import ContenProducto from '@/components/Card/ContenProducto';
import Productos from '@/components/Card/Cards';
import data from '../data/postres.json';
import Barra from '@/components/Navbar/Navbar';
import Chat from '@/components/chat/Chat';
import Footer from '@/components/Footer/Footer';

export default function Home() {

  return (
    <>
      <div>
        <Head>
          <title>Postres</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/P.png" />
        </Head>
        <main>
        </main>
        <body>
          <br></br>
          <br></br>
          <br></br>
          <ContenProducto>

            {data.map(postres =>
              <Productos
                id={postres.id}
                titulo={postres.titulo}
                precio={postres.precio}
                imagen={postres.imagen}
                texto={postres.texto}

              />
            )}
            <br></br>
            <br></br>
          </ContenProducto>
          <br></br>
        </body>

      </div>

    </>

  )
}

