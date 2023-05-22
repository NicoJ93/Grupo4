import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Barra from '@/components/Navbar/Navbar';
import ContenProducto from '@/components/Card/ContenProducto';
import Productos from '@/components/Card/Cards';
import data from '../data/comida.json';

export default function Home() {
  
  return (
    <>
    <div >
      <Head>
        <title>Comidas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/P.png" />
      </Head>
      <main>
        <Barra />
      </main>
      <body>
               
        <br></br>
        <br></br>
        <br></br>
        <ContenProducto>

          {data.map( comida =>
          <Productos
            id={comida.id}
            titulo = {comida.titulo}
            precio = {comida.precio}
            imagen = {comida.imagen}
            texto = {comida.texto}/>
            
            )}
            <br></br>
            <br></br>
            
        </ContenProducto>
           </body>
      </div>
    
      </>

  )
}
