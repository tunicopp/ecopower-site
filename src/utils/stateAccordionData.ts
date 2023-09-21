import { Unit } from "@/@types/app/unit.app.interface";
import image from "../../public/assets/images/unidades/placeholder-unit.png";

interface Data {
  state: string;
  units: Unit[];
  id: string;
}

export const stateAccordionLeftData: Data[] = [
  {
    id: "ac_rs",
    state: "Rio Grande do Sul",
    units: [
      {
        address: "Rua 24 de Agosto 1449 sala 3 Centro Esteio",
        phone: "(51) 99847 7936",
        name: "Esteio",
        image: "/assets/images/unidades/esteio.jpg",
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopoweresteio/",
      },
      {
        address: "Rua Vinte e cinco de julho, 424 - Bairro Rio Branco",
        phone: "(51) 35948488 / (53) 981087187",
        name: "Novo Hamburgo",
        image: "/assets/images/unidades/novo-hamburgo.jpeg",
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopower_novohamburgors",
      },
      {
        address: "Rua benjamin constant, 1169 - Centro",
        phone: "(53) 999059686 / (53) 33250893",
        name: "Pelotas",
        image: "/assets/images/unidades/pelotas.jpeg",
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerunidadepelotas",
      },
    ],
  },
  {
    id: "ac_pr",
    state: "Paraná",
    units: [
      {
        address: "Capitão Telmo Ribeiro, 1391",
        phone: "(44) 997224480",
        name: "Paranavaí",
        image,
        facebook: "https://www.facebook.com/ecopowerparanavaipr",
        instagram: "https://www.instagram.com/ecopowerpvai",
      },
      {
        address: "Rua Pernambuco, 449, centro",
        phone: "(44) 99814-3230",
        name: "Colorado",
        image,
        facebook: "https://www.facebook.com/Ecopowercolorado",
        instagram: "https://www.instagram.com/ecopowerenergiacolorado/",
      },
      {
        address: "Rua Nevada, n° 639, Quebec",
        phone: "(43) 996497263",
        name: "Londrina",
        image,
        facebook:
          "https://www.facebook.com/profile.php?id=100076179608184&mibextid=D4KYlr",
        instagram: "https://www.instagram.com/ecopowerlondrina",
      },
      {
        address: "Pablo Picasso, 92, Fazendinha",
        phone: "(41) 984101013",
        name: "Curitiba",
        image,
        facebook: "facebook.com/ECOPOWERCURITIBAENERGIASOLAR",
        instagram: "https://www.instagram.com/ecopowercuritiba/",
      },
      {
        address: "Pablo Picasso, 92, Fazendinha",
        phone: "(41) 984101013",
        name: "Curitiba",
        image,
        facebook: "facebook.com/ECOPOWERCURITIBAENERGIASOLAR",
        instagram: "https://www.instagram.com/ecopowercuritiba/",
      },
    ],
  },
  {
    id: "ac_rj",
    state: "Rio de Janeiro",
    units: [
      {
        address: "Av Ewerton da Costa Xavier, 1221",
        phone: "(21) 997629112",
        name: "Niteroi",
        image,
        facebook: "https://www.facebook.com/ecopowerniteroioceanica",
        instagram: "https://www.instagram.com/ecopowerniteroi",
      },
      {
        address: "Rua Oitocentos e Cinquenta e Quatro, 180, Jardim Tiradentes",
        phone: "(22) 98117-6888 / (24) 97834-6446",
        name: "Volta Redonda",
        image,
        facebook: "https://www.facebook.com/ecopowersulfluminense",
        instagram: "https://www.instagram.com/ecopower_sulfluminense/",
      },
    ],
  },
  {
    id: "ac_ms",
    state: "Mato Grosso do Sul",
    units: [
      {
        address: "Rua Aquidauana, 726 - sala 09, Jardim Caramuru",
        phone: "(67) 99801-8394",
        name: "Dourados",
        image,
        facebook: "https://www.facebook.com/EcoPowerDouradosMS",
        instagram: "https://www.instagram.com/ecopower_douradosms",
      },
      {
        address: "Home Office",
        phone: "(67) 999741851",
        name: "Amambai",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.facebook.com/ecopowerenergia/",
      },
      {
        address: "Avenida Mato Grosso, 2328 - Jd. dos Estados",
        phone: "(67) 99897-6148",
        name: "Campo Grande",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowercampogrande/",
      },
    ],
  },
  {
    id: "ac_go",
    state: "Goiás",
    units: [
      {
        address: "https://www.instagram.com/ecopower.itaberai",
        phone: "(62) 9828-8079",
        name: "Itaberai",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerenergia/",
      },
    ],
  },
  {
    id: "ac_mt",
    state: "Mato Grosso",
    units: [
      {
        address: "Avenia Cuiabá, 2701, Bairro Primavera II",
        phone: "(66) 992305335",
        name: "Primavera do Leste",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerprimaveradoleste/",
      },
      {
        address: "Avenida Brasil, 1337, Centro",
        phone: "(66) 98121-1295",
        name: "Paranatinga",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerparanatinga/",
      },
      {
        address: "Rua Belo Horizonte,25 N, Centro",
        phone: "(66) 996102295",
        name: "Juara",
        image,
        facebook: "https://www.facebook.com/alvaro.juara",
        instagram: "https://www.instagram.com/ecopower_juara",
      },
      {
        address: "Rua Romualdo Allieve,1390, Centro",
        phone: "(66) 99248-6162",
        name: "Tapurah",
        image,
        facebook: "https://www.facebook.com/alvaro.juara",
        instagram: "https://www.instagram.com/ecopower_tapurah",
      },
      {
        address: "Avenida Rotary Internacional, 1527, Jardim Participação",
        phone: "(66) 997218198",
        name: "Rondonópolis",
        image,
        facebook: "https://www.facebook.com/ecopowerrondonopolismt",
        instagram: "https://www.instagram.com/ecopowerrondonopolis",
      },
      {
        address: "AV Dormevil M De Farias, 351, Jardim São Luiz",
        phone: "(65) 9996703309",
        name: "Caceres",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia",
        instagram: "https://www.instagram.com/ecopower.centrooeste/",
      },
    ],
  },
  {
    id: "ac_ba",
    state: "Bahia",
    units: [
      {
        address: "Rua 25 de Julho, Nº 1191. Bairro América",
        phone: "48 99090-0099",
        name: "Araranguá 1",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerenergia/",
      },
    ],
  },
  {
    id: "ac_pe",
    state: "Pernambuco",
    units: [
      {
        address: "Rua 25 de Julho, Nº 1191. Bairro América",
        phone: "48 99090-0099",
        name: "Araranguá 1",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerenergia/",
      },
    ],
  },
  {
    id: "ac_ce",
    state: "Ceará",
    units: [
      {
        address: "Rua 25 de Julho, Nº 1191. Bairro América",
        phone: "48 99090-0099",
        name: "Araranguá 1",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerenergia/",
      },
    ],
  },
  {
    id: "ac_pa",
    state: "Pará",
    units: [
      {
        address: "Rua 25 de Julho, Nº 1191. Bairro América",
        phone: "48 99090-0099",
        name: "Araranguá 1",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerenergia/",
      },
    ],
  },
  {
    id: "ac_am",
    state: "Amazonas",
    units: [
      {
        address: "Rua 25 de Julho, Nº 1191. Bairro América",
        phone: "48 99090-0099",
        name: "Araranguá 1",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerenergia/",
      },
    ],
  },
  {
    id: "ac_al",
    state: "Alagoas",
    units: [
      {
        address: "Rua 25 de Julho, Nº 1191. Bairro América",
        phone: "48 99090-0099",
        name: "Araranguá 1",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerenergia/",
      },
    ],
  },
  {
    id: "ac_pi",
    state: "Piauí",
    units: [
      {
        address: "Rua 25 de Julho, Nº 1191. Bairro América",
        phone: "48 99090-0099",
        name: "Araranguá 1",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerenergia/",
      },
    ],
  },
  {
    id: "ac_ro",
    state: "Rondônia",
    units: [
      {
        address: "Rua 25 de Julho, Nº 1191. Bairro América",
        phone: "48 99090-0099",
        name: "Araranguá 1",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerenergia/",
      },
    ],
  },
];

export const stateAccordionRightData: Data[] = [
  {
    id: "ac_sc",
    state: "Santa Catarina",
    units: [
      {
        address: "Rua 25 de Julho, Nº 1191. Bairro América",
        phone: "48 99090-0099",
        name: "Araranguá 1",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerenergia/",
      },
    ],
  },
  {
    id: "ac_sp",
    state: "São Paulo",
    units: [
      {
        address: "Rua 25 de Julho, Nº 1191. Bairro América",
        phone: "48 99090-0099",
        name: "Araranguá 1",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerenergia/",
      },
    ],
  },
  {
    id: "ac_es",
    state: "Espírito Santo",
    units: [
      {
        address: "Rua 25 de Julho, Nº 1191. Bairro América",
        phone: "48 99090-0099",
        name: "Araranguá 1",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerenergia/",
      },
    ],
  },
  {
    id: "ac_mg",
    state: "Minas Gerais",
    units: [
      {
        address: "Rua 25 de Julho, Nº 1191. Bairro América",
        phone: "48 99090-0099",
        name: "Araranguá 1",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerenergia/",
      },
    ],
  },
  {
    id: "ac_df",
    state: "Distrito Federal",
    units: [
      {
        address: "Rua 25 de Julho, Nº 1191. Bairro América",
        phone: "48 99090-0099",
        name: "Araranguá 1",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerenergia/",
      },
    ],
  },
  {
    id: "ac_to",
    state: "Tocatins",
    units: [
      {
        address: "Rua 25 de Julho, Nº 1191. Bairro América",
        phone: "48 99090-0099",
        name: "Araranguá 1",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerenergia/",
      },
    ],
  },
  {
    id: "ac_se",
    state: "Sergipe",
    units: [
      {
        address: "Rua 25 de Julho, Nº 1191. Bairro América",
        phone: "48 99090-0099",
        name: "Araranguá 1",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerenergia/",
      },
    ],
  },
  {
    id: "ac_rn",
    state: "Rio Grande do Norte",
    units: [
      {
        address: "Rua 25 de Julho, Nº 1191. Bairro América",
        phone: "48 99090-0099",
        name: "Araranguá 1",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerenergia/",
      },
    ],
  },
  {
    id: "ac_ma",
    state: "Maranhão",
    units: [
      {
        address: "Rua 25 de Julho, Nº 1191. Bairro América",
        phone: "48 99090-0099",
        name: "Araranguá 1",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerenergia/",
      },
    ],
  },
  {
    id: "ac_ap",
    state: "Amapá",
    units: [
      {
        address: "Rua 25 de Julho, Nº 1191. Bairro América",
        phone: "48 99090-0099",
        name: "Araranguá 1",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerenergia/",
      },
    ],
  },
  {
    id: "ac_ac",
    state: "Acre",
    units: [
      {
        address: "Rua 25 de Julho, Nº 1191. Bairro América",
        phone: "48 99090-0099",
        name: "Araranguá 1",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerenergia/",
      },
    ],
  },
  {
    id: "ac_pb",
    state: "Paraíba",
    units: [
      {
        address: "Rua 25 de Julho, Nº 1191. Bairro América",
        phone: "48 99090-0099",
        name: "Araranguá 1",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerenergia/",
      },
    ],
  },
  {
    id: "ac_rr",
    state: "Roraima",
    units: [
      {
        address: "Rua 25 de Julho, Nº 1191. Bairro América",
        phone: "48 99090-0099",
        name: "Araranguá 1",
        image,
        facebook: "https://www.facebook.com/ecopowerenergia/",
        instagram: "https://www.instagram.com/ecopowerenergia/",
      },
    ],
  },
];
