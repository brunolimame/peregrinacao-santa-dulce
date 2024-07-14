import Topo from './componentes/topo';
import Cartaz2024 from './assets/cartaz-2024.webp';
import { Image } from "@nextui-org/image";
import LinkRedeSocialInstagram from './componentes/LinkRedeSocialInstagram';

function App() {

  return (
    <>
      <Topo />
      <div className='w-full h-auto flex justify-center'>
        <Image src={Cartaz2024} className='max-w-[100%] h-auto' radius='none' alt='Peregrinação Santa Dulce, Itabaiana, Cidade dos Milagres' />
      </div>
      <div id="programacao"></div>
      <div id="redes" className='py-12 flex justify-center'>
        <div className='w-full max-w-[1440px] flex justify-between'>
          <LinkRedeSocialInstagram
            imagem="https://i.pravatar.cc/150?u=a04258114e29026708c"
            perfil="@casasantadulce"
            link="#"
            titulo="Instagram Casa Santa Dulce"
          />
          <LinkRedeSocialInstagram
            imagem="https://i.pravatar.cc/150?u=a04258114e29026708c"
            perfil="@casasantadulce"
            link="#"
            titulo="Instagram Casa Santa Dulce"
          />
          <LinkRedeSocialInstagram
            imagem="https://i.pravatar.cc/150?u=a04258114e29026708c"
            perfil="@casasantadulce"
            link="#"
            titulo="Instagram Casa Santa Dulce"
          />

        </div>
      </div>
      <div>
        <Image src={Cartaz2024} className='max-w-[100%] h-auto' radius='none' />
      </div>
    </>
  )
}

export default App
