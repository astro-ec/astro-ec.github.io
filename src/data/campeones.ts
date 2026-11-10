export interface Edicion {
    titulo: string;
    ganadores: string[];
    aviso?: string;
}

export const ediciones: Edicion[] = [
    {
        titulo: 'X Olimpiada Ecuatoriana de Astronomía y Astrofísica 2027',
        ganadores: [],
        aviso:
            'Serán determinados después del Examen Final Nacional 2027 (24 de abril de 2027).',
    },
    {
        titulo: 'IX Olimpiada Ecuatoriana de Astronomía y Astrofísica 2026',
        ganadores: [
            'Romina Acosta Rivera (Quito)',
            'David Alejandro Arellano Martínez (Quito)',
            'Helena Anelisse Uzcategui Briceño (Cuenca)',
            'Matteo Joel Duche González (Quito)',
            'Stephany Katherine Agreda Díaz (Loja)',
        ],
    },
    {
        titulo: 'VIII Olimpiada Ecuatoriana de Astronomía y Astrofísica 2025',
        ganadores: [
            'José David Chiluisa Zambrano (Guayaquil)',
            'Luis Mario Tigselema Vaca (Latacunga)',
            'María Gabriela Tandazo Baquero (Riobamba)',
            'Alexa Isabel Montenegro Viteri (Quito)',
            'Karú Salomé Uzcategui Briceño (Cuenca)',
        ],
    },
    {
        titulo: 'VII Olimpiada Ecuatoriana de Astronomía y Astronáutica 2024',
        ganadores: [
            'Karla Doménica Guevara Castro (Quito)',
            'Adrián Araujo Ortega (Azogues)',
            'Denniss Angeline Shugulí Churta (Quito)',
            'Cielo Valentyne Calderón Moya (Quito)',
        ],
    },
    {
        titulo: 'VI Olimpiada Ecuatoriana de Astronomía y Astronáutica 2023',
        ganadores: [
            'Josúe Eduardo Morejón Intriago (Quito)',
            'Camila Reyes Chamba (Quito)',
            'Ariana Valentina Guerrón Fuentes (Quito)',
            'Dylan Sebastián Casa Pizarro (Quito)',
            'Emily Johanna Chumania Chumaña (Quito)',
        ],
    },
    {
        titulo: 'V Olimpiada Ecuatoriana de Astronomía y Astronáutica 2022',
        ganadores: [
            'Aaron David Andrango Díaz (Quito)',
            'Matías Elías Navarrete Barahona (Quito)',
            'Zoe Micaela Parra Vizcaíno (Quito)',
            'Emilio José Clavón Quilachamín (Quito)',
            'Paolo Salvatore Suasti Gudiño (Ibarra)',
        ],
    },
    {
        titulo: 'IV Olimpiada Ecuatoriana de Astronomía y Astronáutica 2021',
        ganadores: [
            'Iván Andrés Fierro Sánchez (Quito)',
            'Doménica Annaliz Morillo Sánchez (Manta)',
            'Nicolle Anahí Quijije (Manta)',
            'Jerson Javier Chunez Yugsi (Tulcán)',
            'Jaziel Saraí Gómez Barrera (Atuntaqui)',
        ],
    },
    {
        titulo: 'III Olimpiada Ecuatoriana de Astronomía y Astronáutica 2019',
        ganadores: [
            'Daniel Alexander Villarruel Yánez (Quito)',
            'Pauly Sarahí Unapucha Loachamín (Quito)',
            'Daniela Paulet Santamaría Guayaquil (Guayaquil)',
            'José Andrés Acuña (Lago Agrio)',
            'Britney Carolina Robalino Ramirez (Quito)',
        ],
    },
    {
        titulo: 'II Olimpiada Ecuatoriana de Astronomía y Astronáutica 2018',
        ganadores: [
            'Bryan Garay (Guayaquil)',
            'Diana Sánchez (Guayaquil)',
            'Manuel Moreno (Guayaquil)',
            'Daniela Santamaría (Guayaquil)',
        ],
    },
    {
        titulo: 'I Olimpiada Ecuatoriana de Astronomía y Astronáutica 2017',
        ganadores: [
            'Emily Andrea Ayo Iza',
            'Evelyn Elizabeth Pulles Guevara',
            'Pablo Sebastián Andagana Ríos',
        ],
    },
];
