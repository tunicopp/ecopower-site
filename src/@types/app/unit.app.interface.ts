import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Unit {
  name: string;
  address: string;
  phone: string;
  instagram: string;
  facebook: string;
  image: string | StaticImport;
}
