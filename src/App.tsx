import Topo from './componentes/topo';
import Cartaz from './componentes/Cartaz';
import Informacao from './componentes/Informacao';
import Video from './componentes/Video';
import dadosProgramacao, { dataProgramacaoAtualizacao } from './componentes/programacaoDados';
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import { FaCaretRight } from 'react-icons/fa';
import { FcCalendar, FcClock } from 'react-icons/fc';

function App() {

  return (
    <>
      <Topo />
      <Cartaz />
      <Video />

      <div id="programacao" className='py-[40px] grid grid-cols-1 justify-center bg-white/40'>
        <div className='w-full mx-auto flex justify-center pb-[30px] flex flex-col text-center'>
          <h2 className='max-sm:text-[18px] text-[38px] font-bold'>Programação</h2>
          <div className='max-sm:text-[14px] text-[14px]'>Atualizada em <strong>{dataProgramacaoAtualizacao}</strong>, outras alterações serão comunicadas, </div>
          <div className='max-sm:text-[14px] text-[14px] font-semibold text-red-600'>Teremos ônibus para o retorno!</div>
        </div>
        <div className="w-full p-6 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 justify-center">

          {dadosProgramacao.map((item, index) => (<>
            <Card key={index}>
              <CardHeader>
                <div>
                  <div className='flex items-center gap-2'>
                    <FcCalendar size={25} />
                    <h2 className="text-[16x] font-bold">Dia {item.dia} - {item.semana}</h2>
                  </div>
                  {item.descricao && <h4 className='text-[14px] font-semibold'>{item.descricao}</h4>}
                </div>

              </CardHeader>
              <Divider />
              <CardBody>
                {item.locais.length > 0 && <>
                  <ul className='space-y-4'>
                    {item.locais.map((local, index) => (<>
                      <li key={index} className='space-y-1 flex flex-col'>
                        <div className='flex items-start gap-1'>
                          <div className='pt-1'><FcClock size={20} /></div>
                          <div>
                            <strong>{local.hora}</strong> - {local.titulo}
                          </div>
                        </div>
                        {local.descricao && local.descricao.length > 0 && <>
                          <ul>
                            {local.descricao.map((descricao, index) => (
                              <li key={":descricao-local-" + index + ":"}>
                                <div className="flex items-start gap-1">
                                  <div className='pt-[6px]'><FaCaretRight size={15} /></div>
                                  <div>
                                    {descricao}
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </>}
                        {index < (item.locais.length - 1) && <div className='pt-2'><Divider /></div>}
                      </li>
                    </>))}
                  </ul>
                </>}
              </CardBody>
            </Card>
          </>)
          )}
        </div>
      </div>

      <Informacao />
    </>
  )
}

export default App
