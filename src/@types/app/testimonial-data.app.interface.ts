import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default interface TestimonialData {
  text: string;
  link: string;
  person: {
    image: string | StaticImport;
    name: string;
    location: string;
  };
}
