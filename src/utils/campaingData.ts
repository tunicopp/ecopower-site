import CampaingData from "@/@types/app/campaing-data.app.interface";
import campaing1 from "../../public/assets/images/section-campaing/campanha-10-anos.png";
import campaing2 from "../../public/assets/images/section-campaing/mes-do-cliente.png";
import campaing3 from "../../public/assets/images/section-campaing/meu-solar.png";
import campaing4 from "../../public/assets/images/section-campaing/setembro-amarelo.png";
import campaing5 from "../../public/assets/images/section-campaing/outubro-rosa.png";

export const campaingData: CampaingData[] = [
  {
    title: "Campanha 10 Anos EcoPower",
    description:
      "Somos a energia que move o futuro, uma homenagem a todas as pessoas que fazem parte dessa história.",
    price: "Institucional",
    src: campaing1,
    link: "https://www.youtube.com/watch?v=3ZfzU6o7mP0",
  },
  // {
  //   title: "Setembro Mês do Cliente",
  //   description:
  //     "Aproveite para começar a gerar sua própria energia e pagar somente o mínimo.",
  //   price: "Parcelas a partir de R$269,27",
  //   src: campaing2,
  // },
  {
    title: "Promoção Meu Solar",
    description:
      "Kits de energia solar para o consumidor de baixo consumo + fogão por indução elétrico.",
    price: "Parcelas a partir de R$182,13",
    src: campaing3,
  },
  // {
  //   title: "Setembro Amarelo",
  //   description:
  //     "Fale. Ouça. Ninguém está sozinho! Uma campanha de prevenção ao suicídio.",
  //   price: "Endomarketing",
  //   src: campaing4,
  // },
  //{
  //  title: "Outubro Rosa na EcoPower",
  //  description:
  //    "Iluminamos a conscientização e a prevenção unindo nossas energias.",
  //  price: "Comercial e Endomarketing",
  //  src: campaing5,
  //},
];
