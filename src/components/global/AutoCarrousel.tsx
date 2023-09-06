"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
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

const teams = [
  teamOne,
  teamTwo,
  teamThree,
  teamFour,
  teamFive,
  teamSix,
  teamSeven,
  teamEight,
  teamNine,
  teamTen,
  teamEleven,
  teamTwelve,
  teamThirteen,
  teamFourteen,
  teamFifteen,
  teamSixteen,
  teamSeventeen,
];

const AutoCarrousel: React.FC = () => {
  const team = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const boxWidth = 180;
    const totalWidth = boxWidth * team.current.length;
    const time = 150;
    // const dirFromLeft = "+=" + totalWidth;
    const dirFromRight = "-=" + totalWidth;

    const mod = gsap.utils.wrap(0, totalWidth);

    gsap.set(team.current, {
      x: function (i) {
        return i * boxWidth;
      },
    });

    const action = gsap.timeline().to(team.current, {
      x: dirFromRight,
      modifiers: {
        x: (x) => mod(parseFloat(x)) - 300 + "px",
      },
      duration: time,
      ease: "none",
      repeat: -1,
    });

    return () => {
      action.clear();
    };
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !team.current.includes(el)) {
      team.current.push(el);
    }
  };

  return (
    <div className="flex w-full relative items-center h-[236px]">
      {teams.map((c, i) => (
        <div
          key={i}
          ref={addToRefs}
          className="absolute even:top-0 odd:bottom-0"
        >
          <Image
            src={c}
            alt="Nosso time"
            quality={100}
            width={156}
            height={156}
          />
        </div>
      ))}
    </div>
  );
};

export default AutoCarrousel;
