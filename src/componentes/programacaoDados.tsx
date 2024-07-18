export type LocalizacaoType = {
    hora?: string;
    titulo?: string;
    descricao?: string[];
}

export type ProgramacaoType = {
    dia: string;
    semana: string;
    descricao?: string;
    locais: LocalizacaoType[];
}

export const dataProgramacaoAtualizacao:string = '17/07/2024 - 10:53';

const dadosProgramacao: ProgramacaoType[] = [
    {
        dia: '28//07',
        semana: 'Domingo',
        locais: [
            {
                hora: '6H às 22H',
                titulo: 'Divulgação no Congresso Eu Seguirei com Frei Gilson - Comunidade Católica',
                descricao: [
                    "Cidade Santa, Dias d'Ávila - BA"
                ]
            },
        ]
    },
    {
        dia: '29/07',
        semana: 'Segunda-feira',
        locais: [
            {
                hora: '17H',
                titulo: 'PitStop Dulce Luz Pura e Santa',
                descricao: [
                    "Av. Ivo de Carvalho"
                ]
            },
        ]
    },
    {
        dia: '30/07',
        semana: 'Terça-feira',
        locais: [
            {
                hora: '09H',
                titulo: `Visita a Casa Santa Dulce, Secretária de Estado da Assistência Social, Inclusão e Cidadania - Érica Mitidieri`,
            },
            {
                hora: '16H',
                titulo: 'Cafezinho Acolhedor – Tema: O Carisma de Santa Dulce – Ir. Rosana dos Santos',
                descricao: [
                    "Escritora do Livro Espiritualidade: Santa Dulce dos Pobres",
                    "Irmãs Filhas de Maria Servas dos Pobres",
                    "Instituto fundado por Santa Dulce dos Pobres.",
                    "Vivemos o carisma de Amar e Servir a Deus na pessoa dos Pobres e marginalizados.",
                    "Vagas Limitadas 79 9 9974 0868"
                ]
            },
        ]
    },
    {
        dia: '31/07',
        semana: 'Quarta-feira',
        locais: [
            {
                hora: '09H às 11H',
                titulo: 'Visita Técnica Doadores e Amigos, Casa de Acolhimento, Cidade dos Milagres',
                descricao: [
                    "Rua Marcelino R. Bispo,08 - Ao Lado do Hospital"
                ]
            },
            {
                hora: '19H30',
                titulo: 'Missa Capela São Francisco de Assis – Conj. General João Pereira',
                descricao: [
                    "Logo após: Bênção da Casa de Acolhimento - Cidade dos Milagres – Pe. Marcos Rogério",
                    "Rua Marcelino R. Bispo,08 - Ao Lado do Hospital"
                ]
            }
        ]
    },
    {
        dia: '01/08',
        semana: 'Quinta-feira',
        locais: [
            {
                hora: '18H',
                titulo: 'Projeto Sopa de Santa Dulce do Riacho Doce, Bazar Solidário e Festival Doce Luz Kids',
                descricao: [
                    "Missionários, Protetores de Santa Dulce e Rotary Club Nova Geração"
                ]
            },
            {
                hora: '18H13',
                titulo: 'Projeto Cinema de Rua - Bairro Riacho Doce'
            }
        ]
    },
    {
        dia: '02/08',
        semana: 'Sexta-feira',
        locais: [
            {
                hora: '19H30',
                titulo: 'Abertura do Novenário e Festa de Santa Clara e Santa Dulce',
                descricao: [
                    "Novena e Missa",
                    "Igreja Santa Clara e Santa Dulce"
                ]
            }
        ]
    },
    {
        dia: '03/08',
        semana: 'Sábado',
        locais: [
            {
                hora: '18H',
                titulo: 'Ave Maria Sertaneja - Rotatória da Caridade - Igreja Santa Clara e Santa Dulce',
                descricao: [
                    "Gileno Xavier e Tatua o Mensageiro do Forró"
                ]
            },
            {
                hora: '18H10',
                titulo: 'Pedágio Solidário',
                descricao: [
                    "Igreja Sta. Clara e Sta. Dulce"
                ]
            },
            {
                hora: '19H',
                titulo: 'Novena',
            },
            {
                hora: '19H',
                titulo: 'Missa',
                descricao: [
                    "Responsáveis: Capela Jesus Misericordioso - Bairro Marianga, Capela Nossa Senhora Aparecida – Pov Lagamar, Capela Santa Terezinha do Menino - Jesus Pov. Serra e Enchei-vos",
                    "Homenageados: Profissionais da Saúde (Igreja Sta. Clara e Sta. Dulce)",
                    "Tema: Com Santa Clara e Santa Dulce dos Pobres, aprendamos a viver a fraternidade e a amizade.",
                    "Lema: “Vós sois todos irmãos e irmãs” (Mt 23,8)"
                ]
            },
            {
                hora: 'Vamos vivenciar',
                titulo: 'O Encontro dos Milagres',
                descricao: [
                    "Cláudia Araújo e José Maurício, Os miraculados de Santa Dulce",
                ]
            },
            {
                hora: 'Logo Após a Missa',
                titulo: 'Quermesse de Sta. Clara e Sta. Dulce',
            },
        ]
    },
    {
        dia: '04/08',
        semana: 'Domingo',
        descricao: 'PEREGRINAÇÃO DE SANTA DULCE',
        locais: [
            {
                hora: '05H30',
                titulo: 'Concentração na Maternidade São José.',
            },
            {
                hora: '06H',
                titulo: 'Saída da Peregrinação.',
            },
            {
                hora: '09H30',
                titulo: 'Veneração à relíquia de Santa Dulce',
                descricao: [
                    "Pe. José Menezes Ministros e Pastorais"
                ]
            },
            {
                hora: '10H',
                titulo: 'Momento "Você Pode Ser o Próximo Milagre" com oração e música na Ermida',
                descricao: [
                    "Chico do Alerta & convidados"
                ]
            },
            {
                hora: 'Logo após momento oracional',
                titulo: 'Missa campal na Ermida, presidida por Dom Josafá Menezes da Silva',
            },
        ]
    },
];
export default dadosProgramacao;