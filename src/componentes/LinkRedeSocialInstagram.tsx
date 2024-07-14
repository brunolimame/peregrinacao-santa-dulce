import { Avatar, Link } from "@nextui-org/react";
import { FaInstagram } from "react-icons/fa";

type LinkRedeSocialInstagramProps = {
    imagem: string;
    perfil: string;
    link: string
    titulo: string
}

export default function LinkRedeSocialInstagram({ imagem, perfil, link, titulo }: LinkRedeSocialInstagramProps) {
    return (
        <Link href={link} target="_blank" className="cursor-pointer" title={titulo}>
            <div className='flex flex-col justify-center items-center'>
                <Avatar src={imagem} className="w-[120px] h-[120px] text-large" />
                <div className='flex flex-row gap-1 items-center text-gray-900'>
                    <FaInstagram size={20} />
                    <div className='text-[18px]'>
                        {perfil}
                    </div>
                </div>
            </div>
        </Link>
    )
}