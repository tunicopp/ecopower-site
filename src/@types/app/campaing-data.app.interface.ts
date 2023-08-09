import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default interface CampaingData {
  src: string | StaticImport;
  title: string;
  description: string;
  price: string;
}
