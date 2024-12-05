import { Debate } from '../types/debate';

export const debates: Debate[] = [
  {
    id: 'trans-women-sports',
    title: '¿Deberían las mujeres trans participar en deportes femeninos?',
    description: 'Un análisis de los argumentos sobre la participación de mujeres transgénero en competencias deportivas femeninas.',
    proArguments: [
      {
        id: 'p1',
        content: 'Identidad de género y equidad: Reconocer la identidad de género de las mujeres trans implica permitirles competir en la categoría que se alinea con su identidad, promoviendo así la inclusión y el respeto a sus derechos humanos y deportivos.',
        votes: 0,
        comments: [],
        sources: [
          {
            id: 's1',
            title: 'IOC Framework on Fairness, Inclusion and Non-Discrimination',
            year: '2021',
            url: 'https://stillmed.olympics.com/media/Documents/Beyond-the-Games/Human-Rights/IOC-Framework-Fairness-Inclusion-Non-discrimination-2021.pdf',
            description: 'Marco del COI sobre equidad, inclusión y no discriminación'
          },
          {
            id: 's2',
            title: 'The Yogyakarta Principles',
            year: '2007',
            url: 'https://yogyakartaprinciples.org/',
            description: 'Principios sobre la aplicación de la legislación internacional de derechos humanos'
          }
        ]
      },
      {
        id: 'p2',
        content: 'Reducción de la discriminación: Excluir a las mujeres trans podría considerarse discriminación por motivos de identidad de género. Permitir su participación garantiza que el deporte sea un espacio más inclusivo y abierto a la diversidad.',
        votes: 0,
        comments: [],
        sources: [
          {
            id: 's3',
            title: 'Discriminación y violencia contra individuos por su orientación sexual e identidad de género',
            authors: 'ACNUDH',
            year: '2015',
            url: 'https://www.ohchr.org/Documents/Issues/Discrimination/A_HRC_29_23_en.pdf',
            description: 'Informe sobre discriminación y violencia'
          }
        ]
      },
      {
        id: 'p3',
        content: 'Normativas deportivas existentes: Muchas organizaciones deportivas internacionales, como el Comité Olímpico Internacional (COI), han establecido directrices para la participación de atletas trans, requiriendo, por ejemplo, niveles controlados de testosterona, lo que asegura cierto grado de equidad competitiva.',
        votes: 0,
        comments: [],
        sources: [
          {
            id: 's4',
            title: 'Inclusion of Transgender Student-Athletes',
            authors: 'NCAA',
            year: '2011',
            url: 'http://www.ncaa.org/about/resources/inclusion/transgender-student-athletes',
            description: 'Directrices para la inclusión de atletas transgénero'
          }
        ]
      },
      {
        id: 'p4',
        content: 'Variabilidad física en todas las deportistas: En el deporte ya existen diferencias biológicas significativas entre las propias mujeres cis (altura, complexión, nivel de hormonas dentro de rangos normales, etc.). La presencia de atletas trans no necesariamente implica mayor desventaja que la que ya se observa entre mujeres cis con características físicas diversas.',
        votes: 0,
        comments: [],
        sources: [
          {
            id: 's5',
            title: 'The Powers of Testosterone: Obscuring Race and Regional Bias in the Regulation of Women Athletes',
            authors: 'Karkazis, K., & Jordan-Young, R.',
            year: '2018',
            description: 'Estudio sobre el papel de la testosterona en el rendimiento deportivo'
          }
        ]
      },
      {
        id: 'p5',
        content: 'Beneficios sociales y simbólicos: La inclusión de mujeres trans en el deporte puede enviar un mensaje positivo a la sociedad, fomentando la aceptación y reduciendo el estigma asociado a las identidades trans.',
        votes: 0,
        comments: [],
        sources: [
          {
            id: 's6',
            title: 'Athlete Ally Resources',
            url: 'https://www.athleteally.org/',
            description: 'Recursos sobre inclusión en el deporte'
          }
        ]
      }
    ],
    conArguments: [
      {
        id: 'c1',
        content: 'Ventajas físicas percibidas: Algunos argumentan que, a pesar de la terapia hormonal, las mujeres trans que pasaron por la pubertad masculina podrían conservar ciertas ventajas físicas (densidad ósea, masa muscular, capacidad pulmonar) que podrían considerarse injustas frente a atletas que nacieron biológicamente mujeres.',
        votes: 0,
        comments: [],
        sources: [
          {
            id: 's7',
            title: 'Transgender Women in the Female Category of Sport: Perspectives on Testosterone Suppression and Performance Advantage',
            authors: 'Hilton, E.N., & Lundberg, T.R.',
            year: '2021',
            description: 'Estudio sobre ventajas físicas en atletas transgénero'
          }
        ]
      },
      {
        id: 'c2',
        content: 'Integridad de la categoría femenina: Existen posturas que señalan que la categoría femenina se creó para asegurar que las mujeres, cuya fisiología promedio difiere de la masculina, tengan una oportunidad justa de competencia.',
        votes: 0,
        comments: [],
        sources: [
          {
            id: 's8',
            title: 'World Rugby Transgender Guidelines',
            year: '2020',
            url: 'https://www.world.rugby/organisation/governance/regulations',
            description: 'Directrices sobre participantes trans en rugby'
          }
        ]
      },
      {
        id: 'c3',
        content: 'Falta de datos a largo plazo: Algunos críticos resaltan la ausencia de investigaciones concluyentes sobre el impacto real que tienen las regulaciones hormonales en la nivelación del terreno competitivo, por lo que proponen más estudio científico antes de decisiones definitivas.',
        votes: 0,
        comments: [],
        sources: [
          {
            id: 's9',
            title: 'Androgens and athletic performance of elite female athletes',
            authors: 'Bermon, S.',
            year: '2017',
            description: 'Estudio sobre andrógenos y rendimiento deportivo'
          }
        ]
      },
      {
        id: 'c4',
        content: 'Preocupación por la igualdad en la élite deportiva: En deportes de élite, pequeñas diferencias en fuerza, potencia o resistencia pueden marcar la diferencia entre ganar o perder.',
        votes: 0,
        comments: [],
        sources: [
          {
            id: 's10',
            title: 'Transgender Athletes in Competitive Sport',
            authors: 'Harper, J.',
            year: '2018',
            description: 'Análisis de investigaciones sobre rendimiento de atletas trans'
          }
        ]
      },
      {
        id: 'c5',
        content: 'Efectos psicológicos sobre atletas cis: Quienes se oponen consideran que las mujeres cis podrían sentirse en desventaja o desmotivadas si perciben que compiten contra rivales con ventajas físicas heredadas del desarrollo masculino.',
        votes: 0,
        comments: [],
        sources: [
          {
            id: 's11',
            title: 'Title IX and Transgender Athletes',
            authors: 'Hogshead-Makar, N.',
            year: '2016',
            description: 'Discusión sobre percepciones y preocupaciones sobre la equidad competitiva'
          }
        ]
      }
    ]
  }
];