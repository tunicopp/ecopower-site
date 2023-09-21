import { Unit } from "@/@types/app/unit.app.interface";
import image from "../../public/assets/images/unidades/placeholder-unit.png";
import data from "../../public/assets/json/unidades.json";

interface Data {
  state: string;
  units: Unit[];
  id: string;
}

// export const stateAccordionLeftData: Data[] = data.flatMap((d, i) => {
//   if (
//     d.Uf === "SC" ||
//     d.Uf === "AP" ||
//     d.Uf === "BA" ||
//     d.Uf === "DF" ||
//     d.Uf === "GO" ||
//     d.Uf === "MT" ||
//     d.Uf === "MG" ||
//     d.Uf === "PB" ||
//     d.Uf === "PE" ||
//     d.Uf === "RJ" ||
//     d.Uf === "RS" ||
//     d.Uf === "RR" ||
//     d.Uf === "SP" ||
//     d.Uf === "TO"
//   ) {
//     return {id: i, state};
//   } else return [];
// });

export const stateAccordionLeftData: Data[] = [
  {
    id: "ac_rs",
    state: "Rio Grande do Sul",
    units: data
      .filter((d) => d.Uf === "RS")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_pr",
    state: "Paraná",
    units: data
      .filter((d) => d.Uf === "PR")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_rj",
    state: "Rio de Janeiro",
    units: data
      .filter((d) => d.Uf === "RJ")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_ms",
    state: "Mato Grosso do Sul",
    units: data
      .filter((d) => d.Uf === "MS")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_go",
    state: "Goiás",
    units: data
      .filter((d) => d.Uf === "GO")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_mt",
    state: "Mato Grosso",
    units: data
      .filter((d) => d.Uf === "MT")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_ba",
    state: "Bahia",
    units: data
      .filter((d) => d.Uf === "BA")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_pe",
    state: "Pernambuco",
    units: data
      .filter((d) => d.Uf === "PE")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_ce",
    state: "Ceará",
    units: data
      .filter((d) => d.Uf === "CE")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_pa",
    state: "Pará",
    units: data
      .filter((d) => d.Uf === "PA")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_am",
    state: "Amazonas",
    units: data
      .filter((d) => d.Uf === "AM")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_al",
    state: "Alagoas",
    units: data
      .filter((d) => d.Uf === "AL")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_pi",
    state: "Piauí",
    units: data
      .filter((d) => d.Uf === "PI")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_ro",
    state: "Rondônia",
    units: data
      .filter((d) => d.Uf === "RO")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
];

export const stateAccordionRightData: Data[] = [
  {
    id: "ac_sc",
    state: "Santa Catarina",
    units: data
      .filter((d) => d.Uf === "SC")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_sp",
    state: "São Paulo",
    units: data
      .filter((d) => d.Uf === "SP")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_es",
    state: "Espírito Santo",
    units: data
      .filter((d) => d.Uf === "ES")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_mg",
    state: "Minas Gerais",
    units: data
      .filter((d) => d.Uf === "MG")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_df",
    state: "Distrito Federal",
    units: data
      .filter((d) => d.Uf === "DF")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_to",
    state: "Tocatins",
    units: data
      .filter((d) => d.Uf === "TO")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_se",
    state: "Sergipe",
    units: data
      .filter((d) => d.Uf === "SE")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_rn",
    state: "Rio Grande do Norte",
    units: data
      .filter((d) => d.Uf === "RN")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_ma",
    state: "Maranhão",
    units: data
      .filter((d) => d.Uf === "MA")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_ap",
    state: "Amapá",
    units: data
      .filter((d) => d.Uf === "AP")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_ac",
    state: "Acre",
    units: data
      .filter((d) => d.Uf === "AC")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_pb",
    state: "Paraíba",
    units: data
      .filter((d) => d.Uf === "PB")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
  {
    id: "ac_rr",
    state: "Roraima",
    units: data
      .filter((d) => d.Uf === "RR")
      .flatMap((d) => ({
        name: d.Municipio,
        address: d.Endereco,
        facebook: d.Facebook,
        instagram: d.Instagram,
        image,
        phone: d.Telefone,
      })) as any,
  },
];
