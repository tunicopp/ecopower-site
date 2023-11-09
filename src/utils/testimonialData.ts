import TestimonialData from "@/@types/app/testimonial-data.app.interface";
import personImage1 from "../../public/assets/images/section-testimonial/person-1.png";
import personImage2 from "../../public/assets/images/section-testimonial/person-2.png";
import personImage3 from "../../public/assets/images/section-testimonial/person-3.png";
import personImage4 from "../../public/assets/images/section-testimonial/person-4.png";
import personImage5 from "../../public/assets/images/section-testimonial/person-5.png";
import personImage6 from "../../public/assets/images/section-testimonial/person-6.png";
import personImage7 from "../../public/assets/images/section-testimonial/person-7.png";

export const testimonialData: TestimonialData[] = [
  {
    text: "“Estou satisfeito com a redução do preço que pago. Antes eram cerca de R$ 230 reais, agora são apenas R$ 90 a cada dois meses, quase a taxa mínima”",
    link: "/assets/videos/vid_jose_batista.mp4",
    person: {
      image: personImage1,
      name: "José Batista da Costa",
      location: "Monte Alto/SP",
    },
  },
  {
    text: "“O atendimento foi maravilhoso, não tive nenhum problema, questão de materiais assim, tudo de excelente qualidade.”",
    link: "/assets/videos/vid_edimar_ap.mp4",
    person: {
      image: personImage2,
      name: "Edimar Aparecido Ricci",
      location: "Monte Alto/SP",
    },
  },
  {
    text: "“Esse é um trabalho árduo, um trabalho que demandou muita vontade, são mais de 3400 módulos instalados, então não é qualquer número.”",
    link: "/assets/videos/vid_pecuaria_br.mp4",
    person: {
      image: personImage3,
      name: "Pecuária BR",
      location: "Campo Grande/MS",
    },
  },
  //  {
  //    text: "“Acredito que essa economia quase zerará nossas despesas com energia elétrica. Assim, poderemos investir em outras necessidades, como alimentação, roupas, educação das crianças”",
  //    link: "/assets/videos/vid_tania.mp4",
  //    person: {
  //      image: personImage4,
  //      name: "Tania Diamantino",
  //      location: "Barretos/SP",
  //    },
  //  },
  {
    text: "“A segurança de um valor justo, a segurança de uma empresa idônea, a segurança de ter qualidade, com certeza é a EcoPower.”",
    link: "/assets/videos/vid_flavio.mp4",
    person: {
      image: personImage5,
      name: "Flavio",
      location: "Alto Paraná/PR",
    },
  },
  //  {
  //    text: "“Com dois meses já reduziu ao mínimo da minha luz, eu tinha em torno de R$ 700,00 a R$ 800,00 no mês, fora da época da colheita, ela caiu para o mínimo já.”",
  //    link: "/assets/videos/vid_rodrigo.mp4",
  //    person: {
  //      image: personImage6,
  //      name: "Rodrigo",
  //      location: "Riberão Preto/SP",
  //    },
  //  },
  //  {
  //    text: "Hoje é o grande dia da entrega das placas solares da EcoPower, daqui pra frente nós não pagamos mais energia",
  //    link: "/assets/videos/vid_barro_preto.mp4",
  //    person: {
  //      image: personImage7,
  //      name: "Bruno & Barreto",
  //      location: "Maringá/PR",
  //    },
  //  },
];
