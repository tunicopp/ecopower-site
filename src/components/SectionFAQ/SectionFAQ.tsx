import React from "react";
import GridContainer from "../global/GridContainer";
import Reveal from "../global/Reveal";
import TitleComponent from "../global/TitleComponent";
import Accordion from "../Accordion/Accordion";

const SectionFAQ: React.FC = () => {
  return (
    <section>
      <GridContainer className="flex-col py-[110px]">
        <Reveal>
          <TitleComponent>Dúvidas frequentes</TitleComponent>
        </Reveal>
        <Reveal className="mt-[10px] mb-[42px]" delay={0.4}>
          <span className="text-lg text-grayscale-800">
            Lorem ipsum dolor sit amet consectetur.
          </span>
        </Reveal>
        <div className="h-stack-18">
          <Accordion title="Quanto custa?">
            Lorem ipsum dolor sit amet consectetur. Massa lobortis orci leo
            lectus pellentesque enim pharetra sit phasellus. Tristique nulla
            faucibus enim velit aliquam dolor. Aliquet dui id elit praesent
            pellentesque tellus tellus at pellentesque. At sem pellentesque
            adipiscing tortor enim ultricies nullam bibendum in. Sagittis ac
            pellentesque sed dignissim dictum et eu faucibus ut.
          </Accordion>
          <Accordion title="Quanto custa?">
            Lorem ipsum dolor sit amet consectetur. Massa lobortis orci leo
            lectus pellentesque enim pharetra sit phasellus. Tristique nulla
            faucibus enim velit aliquam dolor. Aliquet dui id elit praesent
            pellentesque tellus tellus at pellentesque. At sem pellentesque
            adipiscing tortor enim ultricies nullam bibendum in. Sagittis ac
            pellentesque sed dignissim dictum et eu faucibus ut.
          </Accordion>
          <Accordion title="Quanto custa?">
            Lorem ipsum dolor sit amet consectetur. Massa lobortis orci leo
            lectus pellentesque enim pharetra sit phasellus. Tristique nulla
            faucibus enim velit aliquam dolor. Aliquet dui id elit praesent
            pellentesque tellus tellus at pellentesque. At sem pellentesque
            adipiscing tortor enim ultricies nullam bibendum in. Sagittis ac
            pellentesque sed dignissim dictum et eu faucibus ut.
          </Accordion>
          <Accordion title="Quanto custa?">
            Lorem ipsum dolor sit amet consectetur. Massa lobortis orci leo
            lectus pellentesque enim pharetra sit phasellus. Tristique nulla
            faucibus enim velit aliquam dolor. Aliquet dui id elit praesent
            pellentesque tellus tellus at pellentesque. At sem pellentesque
            adipiscing tortor enim ultricies nullam bibendum in. Sagittis ac
            pellentesque sed dignissim dictum et eu faucibus ut.
          </Accordion>
          <Accordion title="Quanto custa?">
            Lorem ipsum dolor sit amet consectetur. Massa lobortis orci leo
            lectus pellentesque enim pharetra sit phasellus. Tristique nulla
            faucibus enim velit aliquam dolor. Aliquet dui id elit praesent
            pellentesque tellus tellus at pellentesque. At sem pellentesque
            adipiscing tortor enim ultricies nullam bibendum in. Sagittis ac
            pellentesque sed dignissim dictum et eu faucibus ut.
          </Accordion>
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionFAQ;
