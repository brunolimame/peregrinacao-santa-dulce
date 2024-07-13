import Topo from './componentes/topo'
import Cartaz2024 from './assets/cartaz-2024.webp'
import { Image } from "@nextui-org/image";
import MyMapComponent from './componentes/googleMaps'

function App() {

  return (
    <>
      <Topo />
      <div className='w-full h-auto flex justify-center'>
        <Image src={Cartaz2024} className='max-w-[100%] h-auto' radius='none' />
        <MyMapComponent />
      </div>

    </>
  )
}

export default App
