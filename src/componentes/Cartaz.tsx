import Cartaz2024 from './../assets/cartaz-2024.webp';
import { Image } from "@nextui-org/image";

export default function Cartaz() {
    return (
        <div className='w-full h-auto flex justify-center'>
            <Image src={Cartaz2024} className='max-w-[100%] h-auto' radius='none' alt='Peregrinação Santa Dulce, Itabaiana, Cidade dos Milagres' />
        </div>
    )
}