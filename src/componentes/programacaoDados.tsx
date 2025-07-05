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

export const dataProgramacaoAtualizacao: string = '05/07/2025';

const dadosProgramacao: ProgramacaoType[] = [
    {
        dia: '29/07',
        semana: 'Terça-feira',
        locais: [
            {
                hora: '09H',
                titulo: 'Dia de Doar - Exposição da Relíquia',
                descricao: [
                    "Casa dos Milagres"
                ]
            },
        ]
    },
    {
        dia: '30/07',
        semana: 'Quarta-feira',
        locais: [
            {
                hora: '17H',
                titulo: 'Sopa Solidária - Exposição da Relíquia',
                descricao: [
                    "Oratório Santa Dulce"
                ]
            },
        ]
    },
    {
        dia: '31/07',
        semana: 'Quinta-feira',
        locais: [
            {
                hora: '18H',
                titulo: 'Projeto Sopa de Santa Dulce - Exposição da Relíquia',
                descricao: [
                    "Riacho Doce"
                ]
            },
        ]
    },
    {
        dia: '01/08',
        semana: 'Sexta-feira',
        locais: [
            {
                hora: '09H',
                titulo: 'Momento Somos Mais de 100 vidas - Exposição da Relíquia',
                descricao: [
                    "Casa Santa Dulce"
                ]
            },
        ]
    },
    {
        dia: '02/08',
        semana: 'Sábado',
        locais: [
            {
                hora: '19H',
                titulo: `Novena - Paróquia Santa Clara e Santa Dulce`,
            },
            {
                hora: '19H30',
                titulo: `Missa - Paróquia Santa Clara e Santa Dulce`,
            },
            {
                hora: '20H30',
                titulo: `Quermesse e Distribuição das Fitinhas do Milagre`,
            },
        ]
    },
    {
        dia: '03/08',
        semana: 'Domingo',
        locais: [
            {
                hora: '05H30',
                titulo: 'Concentração na Maternidade São José.',
                descricao: []
            },
            {
                hora: '06H',
                titulo: 'Saída dos Peregrinos (Peregrinação de Santa Dulce)',
                descricao: []
            },
            {
                hora: '08H30',
                titulo: 'Momento Doce Luz - Ermita Santa Dulce',
                descricao: []
            },
            {
                hora: '09H',
                titulo: 'Missa - Presidida por Dom Josafá, celebrada por Pe. José Menezes e concelebrada por sacerdotes convidados',
                descricao: [
                    "Local: Ermita Santa Dulce (anexa ao Parque dos Falcões)"
                ]
            },
        ]
    },
];
export default dadosProgramacao;