export type LocationType = {
    name: string;
    address: string;
    latitude: number | null;
    longitude: number | null;
}

export type EventType = {
    date: string;
    time: string;
    title: string;
    description: string;
    location: LocationType;
}


const dadosProgramacao: EventType[] = [
    {
        date: "2024-07-30",
        time: "09:00",
        title: "Visita à Casa Santa Dulce",
        description: "Secretária de Estado da Assistência Social, Inclusão e Cidadania: Érica Mitidieri",
        location: {
            name: "Casa Santa Dulce",
            address: "",
            latitude: null,
            longitude: null
        }
    },
    {
        date: "2024-07-31",
        time: "16:00 - 18:00",
        title: "Visita Técnica",
        description: "Doadores e Amigos na Casa de Acolhimento",
        location: {
            name: "Cidade dos Milagres",
            address: "Rua Marcelino R. Bispo, 08 - Ao lado do Hospital",
            latitude: null,
            longitude: null
        }
    },
    {
        date: "2024-08-01",
        time: "09:00",
        title: "Benção da Casa de Acolhimento",
        description: "Cidade dos Milagres",
        location: {
            name: "Cidade dos Milagres",
            address: "Rua Marcelino R. Bispo, 08 - Ao lado do Hospital",
            latitude: null,
            longitude: null
        }
    },
    {
        date: "2024-08-02",
        time: "19:30",
        title: "Abertura do Novenário e Festa",
        description: "Novena e Missa de Santa Clara e Santa Dulce",
        location: {
            name: "Igreja Santa Clara e Santa Dulce",
            address: "",
            latitude: null,
            longitude: null
        }
    },
    {
        date: "2024-08-03",
        time: "18:00",
        title: "Ave Maria Sertaneja",
        description: "Participação: Gileno Xavier e Tatua o Mensageiro do Forró",
        location: {
            name: "Rotatória da Caridade, Igreja Santa Clara e Santa Dulce",
            address: "",
            latitude: null,
            longitude: null
        }
    },
    {
        date: "2024-08-03",
        time: "18:10",
        title: "Pedágio Solidário",
        description: "",
        location: {
            name: "Igreja Santa Clara e Santa Dulce",
            address: "",
            latitude: null,
            longitude: null
        }
    },
    {
        date: "2024-08-03",
        time: "18:13",
        title: "Encontro dos Milagres",
        description: "Participação: Cláudia Araújo e José Mauricio, miraculados de Santa Dulce",
        location: {
            name: "Igreja Santa Clara e Santa Dulce",
            address: "",
            latitude: null,
            longitude: null
        }
    },
    {
        date: "2024-08-03",
        time: "19:00",
        title: "Novena e Missa",
        description: "Tema: Com Santa Clara e Santa Dulce dos Pobres, aprendamos a viver a fraternidade e a amizade. Lema: “Vós sois todos irmãos e irmãs” (Mt 23,8)",
        location: {
            name: "Igreja Santa Clara e Santa Dulce",
            address: "",
            latitude: null,
            longitude: null
        }
    },
    {
        date: "2024-08-04",
        time: "05:30",
        title: "Concentração na Maternidade São José",
        description: "",
        location: {
            name: "Maternidade São José",
            address: "",
            latitude: null,
            longitude: null
        }
    },
    {
        date: "2024-08-04",
        time: "06:00",
        title: "Saída da Peregrinação",
        description: "",
        location: {
            name: "",
            address: "",
            latitude: null,
            longitude: null
        }
    },
    {
        date: "2024-08-04",
        time: "09:30",
        title: "Veneração à Relíquia de Santa Dulce",
        description: "Participação: Ministros e Pastorais da Igreja Santa Clara e Santa Dulce",
        location: {
            name: "Ermida",
            address: "",
            latitude: null,
            longitude: null
        }
    },
    {
        date: "2024-08-04",
        time: "10:00",
        title: "Momento 'Você Pode Ser o Próximo Milagre' com oração e música na Ermida",
        description: "Participação: Chico do Alerta & convidados",
        location: {
            name: "Ermida",
            address: "",
            latitude: null,
            longitude: null
        }
    },
    {
        date: "2024-08-04",
        time: "",
        title: "Momento oracional",
        description: "Missa campal na Ermida, presidida por Dom Josafá",
        location: {
            name: "Ermida",
            address: "",
            latitude: null,
            longitude: null
        }
    },
    {
        date: "2024-08-04",
        time: "",
        title: "Retorno",
        description: "Haverá ônibus para o retorno",
        location: {
            name: "",
            address: "",
            latitude: null,
            longitude: null
        }
    }
];
export default dadosProgramacao;