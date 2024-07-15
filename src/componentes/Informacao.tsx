import { FaPhoneVolume } from "react-icons/fa6";
import LinkRedeSocialInstagram from "./LinkRedeSocialInstagram";
import InstagramCasaSantaDulce from './../assets/instagram_casasantadulcedospobres.webp';
import InstagramPeregrinacaoSantaDulce from './../assets/instagram_peregrinacaosantadulce.webp';
import InstagramErmitaSantaDulce from './../assets/instagram_ermidadesantadulce.webp';

export default function Informacao() {
    return (
        <>
            <div id="informacao" className='py-[40px] grid grid-cols-1 justify-center'>
                <div className='w-full mx-auto flex justify-center pb-[30px] text-[38px] font-bold'>
                    <h2 className='max-sm:text-[18px]'>Para mais informações</h2>
                </div>
                <div className='w-full max-w-[1440px] grid grid-cols-4 justify-between mx-auto px-6 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:justify-center max-lg:gap-[40px]'>
                    <div className="w-full flex justify-center">
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <div><FaPhoneVolume size={42} /></div>
                            <div className='flex flex-row gap-1 items-center text-gray-900'>
                                <div className='text-[20px] font-semibold'>
                                    <div>(79) 9 8134-9784</div>
                                    <div>(79) 9 9629-2551</div>
                                    <div>(79) 9 9974-0868</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <LinkRedeSocialInstagram
                        imagem={InstagramCasaSantaDulce}
                        perfil="casasantadulcedospobres"
                        titulo="Instagram Casa Santa Dulce"
                    />

                    <LinkRedeSocialInstagram
                        imagem={InstagramPeregrinacaoSantaDulce}
                        perfil="peregrinacaosantadulce "
                        titulo="Instagram Peregrinação Santa Dulce"
                    />

                    <LinkRedeSocialInstagram
                        imagem={InstagramErmitaSantaDulce}
                        perfil="ermidadesantadulce"
                        titulo="Instagram Ermita Santa Dulce"
                    />
                </div>
            </div >
        </>
    )
}