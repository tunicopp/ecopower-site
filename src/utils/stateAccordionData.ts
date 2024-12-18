import { Unit } from "@/@types/app/unit.app.interface";
import { units } from "./units";

export interface Data {
  state: string;
  units: Unit[];
  id: string;
}

const data = units;

export const stateAccordionLeftData: Data[] = [
  {
    id: "ac_ac",
    state: "Acre",
    units: data
      .filter((d) => d.uf === "AC")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_al",
    state: "Alagoas",
    units: data
      .filter((d) => d.uf === "AL")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_ap",
    state: "Amapá",
    units: data
      .filter((d) => d.uf === "AP")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_am",
    state: "Amazonas",
    units: data
      .filter((d) => d.uf === "AM")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_ba",
    state: "Bahia",
    units: data
      .filter((d) => d.uf === "BA")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_ce",
    state: "Ceará",
    units: data
      .filter((d) => d.uf === "CE")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_df",
    state: "Distrito Federal",
    units: data
      .filter((d) => d.uf === "DF")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_es",
    state: "Espírito Santo",
    units: data
      .filter((d) => d.uf === "ES")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_go",
    state: "Goiás",
    units: data
      .filter((d) => d.uf === "GO")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_ma",
    state: "Maranhão",
    units: data
      .filter((d) => d.uf === "MA")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_mt",
    state: "Mato Grosso",
    units: data
      .filter((d) => d.uf === "MT")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_ms",
    state: "Mato Grosso do Sul",
    units: data
      .filter((d) => d.uf === "MS")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_mg",
    state: "Minas Gerais",
    units: data
      .filter((d) => d.uf === "MG")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
];

export const stateAccordionRightData: Data[] = [
  {
    id: "ac_pa",
    state: "Pará",
    units: data
      .filter((d) => d.uf === "PA")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_pb",
    state: "Paraíba",
    units: data
      .filter((d) => d.uf === "PB")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_pr",
    state: "Paraná",
    units: data
      .filter((d) => d.uf === "PR")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_pe",
    state: "Pernambuco",
    units: data
      .filter((d) => d.uf === "PE")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_pi",
    state: "Piauí",
    units: data
      .filter((d) => d.uf === "PI")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_rj",
    state: "Rio de Janeiro",
    units: data
      .filter((d) => d.uf === "RJ")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_rn",
    state: "Rio Grande do Norte",
    units: data
      .filter((d) => d.uf === "RN")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_rs",
    state: "Rio Grande do Sul",
    units: data
      .filter((d) => d.uf === "RS")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_ro",
    state: "Rondônia",
    units: data
      .filter((d) => d.uf === "RO")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_rr",
    state: "Roraima",
    units: data
      .filter((d) => d.uf === "RR")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_sc",
    state: "Santa Catarina",
    units: data
      .filter((d) => d.uf === "SC")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_sp",
    state: "São Paulo",
    units: data
      .filter((d) => d.uf === "SP")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_se",
    state: "Sergipe",
    units: data
      .filter((d) => d.uf === "SE")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
  {
    id: "ac_to",
    state: "Tocatins",
    units: data
      .filter((d) => d.uf === "TO")
      .flatMap((d) => ({
        municipio: d.municipio,
        address: d.address,
        facebook: d.facebook,
        instagram: d.instagram,
        photo: d.photo,
        phone: d.phone,
        uf: d.uf,
      })) as any,
  },
];
