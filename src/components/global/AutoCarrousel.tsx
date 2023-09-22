"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "swiper/css";
import Image from "next/image";
import teamEight from "../../../public/assets/images/carreiras/team-eight.png";
import teamEleven from "../../../public/assets/images/carreiras/team-eleven.png";
import teamFifteen from "../../../public/assets/images/carreiras/team-fifteen.png";
import teamFive from "../../../public/assets/images/carreiras/team-five.png";
import teamFour from "../../../public/assets/images/carreiras/team-four.png";
import teamFourteen from "../../../public/assets/images/carreiras/team-fourteen.png";
import teamNine from "../../../public/assets/images/carreiras/team-nine.png";
import teamOne from "../../../public/assets/images/carreiras/team-one.png";
import teamSeven from "../../../public/assets/images/carreiras/team-seven.png";
import teamSeventeen from "../../../public/assets/images/carreiras/team-seventeen.png";
import teamSix from "../../../public/assets/images/carreiras/team-six.png";
import teamSixteen from "../../../public/assets/images/carreiras/team-sixteen.png";
import teamTen from "../../../public/assets/images/carreiras/team-ten.png";
import teamThirteen from "../../../public/assets/images/carreiras/team-thirteen.png";
import teamThree from "../../../public/assets/images/carreiras/team-three.png";
import teamTwelve from "../../../public/assets/images/carreiras/team-twelve.png";
import teamTwo from "../../../public/assets/images/carreiras/team-two.png";
import teamEighteen from "../../../public/assets/images/carreiras/team-eighteen.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const teams = [
  {
    image: teamOne,
    link: "https://www.linkedin.com/in/elisangelaguilar",
  },
  {
    image: teamTwo,
    link: "https://www.linkedin.com/in/advmelissabarbosa",
  },
  {
    image: teamThree,
    link: "https://www.linkedin.com/in/murilo-mazer-santos-044542219/",
  },
  {
    image: teamFour,
    link: "https://www.linkedin.com/in/danielabenevides-rh/",
  },
  {
    image: teamFive,
    link: "https://www.linkedin.com/in/n%C3%A1chila-santos-19165764",
  },
  {
    image: teamSix,
    link: "https://www.linkedin.com/in/antonio-sergio-poliselli-filho-599429aa/ ",
  },
  {
    image: teamSeven,
    link: "https://www.linkedin.com/in/joaolbr/",
  },
  {
    image: teamEight,
    link: "https://www.linkedin.com/in/fabio-freitas-lima-24a949205/",
  },
  {
    image: teamNine,
    link: "https://www.linkedin.com/in/juniorcezar-gerencia-contabil-financeira/",
  },
  {
    image: teamTen,
    link: "https://www.linkedin.com/in/vinicius-guilherme-de-freitas-62b24934",
  },
  {
    image: teamEleven,
    link: "https://www.linkedin.com/in/laurye-borim",
  },
  {
    image: teamTwelve,
    link: "https://www.linkedin.com/in/leandro-oliveira-nunes-a5536a62/",
  },
  {
    image: teamThirteen,
    link: "https://www.linkedin.com/in/flavia-rodrigues/",
  },
  {
    image: teamFourteen,
    link: "https://www.linkedin.com/in/maria-eduarda-pereira-garcia-666189212/",
  },
  {
    image: teamFifteen,
    link: "https://www.linkedin.com/in/maiky-julio-avila-58ba4228a",
  },
  {
    image: teamSixteen,
    link: "https://www.linkedin.com/in/anne-esquivel-80737480/",
  },
  {
    image: teamSeventeen,
    link: "https://www.linkedin.com/in/bianca-romero-da-rocha-2a135a197/",
  },
  {
    image: teamEighteen,
    link: "https://www.linkedin.com/in/josemarialobato",
  },
];

const AutoCarrousel: React.FC = () => {
  // const team = useRef<HTMLDivElement[]>([]);

  // useEffect(() => {
  //   const boxWidth = 180;
  //   const totalWidth = boxWidth * team.current.length;
  //   const time = 150;
  //   // const dirFromLeft = "+=" + totalWidth;
  //   const dirFromRight = "-=" + totalWidth;

  //   const mod = gsap.utils.wrap(0, totalWidth);

  //   gsap.set(team.current, {
  //     x: function (i) {
  //       return i * boxWidth;
  //     },
  //   });

  //   const action = gsap.timeline().to(team.current, {
  //     x: dirFromRight,
  //     modifiers: {
  //       x: (x) => mod(parseFloat(x)) - 300 + "px",
  //     },
  //     duration: time,
  //     ease: "none",
  //     repeat: -1,
  //   });

  //   return () => {
  //     action.clear();
  //   };
  // }, []);

  // const addToRefs = (el: HTMLDivElement) => {
  //   if (el && !team.current.includes(el)) {
  //     team.current.push(el);
  //   }
  // };

  return (
    // <div className="flex w-full relative items-center h-[236px]">
    //   {teams.map((c, i) => (
    //     <div
    //       key={i}
    //       ref={addToRefs}
    //       className="absolute even:top-0 odd:bottom-0"
    //     >
    //       <a href={c.link}>
    //         <Image
    //           src={c.image}
    //           alt="Nosso time"
    //           quality={100}
    //           width={156}
    //           height={156}
    //         />
    //       </a>
    //     </div>
    //   ))}
    // </div>
    <div className="flex w-full relative items-center h-[236px]">
      <Swiper
        slidesPerView="auto"
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        draggable
        className="h-[236px] w-full"
        spaceBetween={24}
        modules={[Autoplay]}
      >
        {teams.map((c, i) => (
          <SwiperSlide
            className="!w-[156px] !flex absolute even:items-end"
            key={i}
          >
            <a href={c.link}>
              <Image
                src={c.image}
                alt="Nosso time"
                quality={100}
                width={156}
                height={156}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AutoCarrousel;
