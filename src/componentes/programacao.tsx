import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { FaRegCalendarAlt } from "react-icons/fa";
import dadosProgramacao from "./programacaoDados";

export default function Programacao() {
    const formatarData = (dia: string, hora?: string) => {
        const data = `${dia.split('-').reverse().join('/')}`;
        return hora ? `${data} ${hora}` : data;

    }
    return (
        <>
            <div id="programacao" className='py-[40px] grid grid-cols-1 justify-center bg-white/40'>
                <div className='w-full mx-auto flex justify-center pb-[30px] text-[38px] font-bold'>
                    <h2 className='max-sm:text-[18px]'>Programação</h2>
                </div>
                <div className="w-full p-6 grid grid-cols-4 gap-9 justify-center">

                    {dadosProgramacao.map((item, index) => (<>
                        <Card key={index}>
                            <CardHeader className="flex gap-3">
                                <FaRegCalendarAlt size={38} />
                                <div className="flex flex-col">
                                    <p className="text-md">{item.title}</p>
                                    <p className="text-small text-default-500">{formatarData(item.date, item.time)}</p>
                                </div>
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                {item.description && <>
                                    <p>{item.description}</p>
                                </>}
                                <h4><strong>Localização:</strong></h4>
                                <p>{item.location.name}</p>
                                <p>{item.location.address}</p>

                            </CardBody>
                        </Card>
                    </>)
                    )}
                </div>
            </div >
        </>
    )
}