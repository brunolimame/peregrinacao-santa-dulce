import { Avatar, Link } from "@nextui-org/react";
import { FaInstagram } from "react-icons/fa";

type LinkRedeSocialInstagramProps = {
    imagem: string;
    perfil: string;
    titulo: string
}

export default function LinkRedeSocialInstagram({ imagem, perfil, titulo }: LinkRedeSocialInstagramProps) {
    return (
        <>
            <div className="w-full flex justify-center">
                <Link href={"https://instagram.com/" + perfil} target="_blank" className="cursor-pointer" title={titulo}>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <Avatar src={imagem} className="w-[120px] h-[120px] text-large" />
                        <div className='flex flex-row gap-1 items-center text-gray-900'>
                            <FaInstagram size={22} />
                            <div className='text-[20px] font-semibold'>
                                {perfil}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}