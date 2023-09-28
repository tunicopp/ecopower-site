import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Unit {
  municipio: string;
  address: string;
  phone: string;
  instagram: string;
  facebook: string;
  photo: string | StaticImport;
  uf: string;
}
