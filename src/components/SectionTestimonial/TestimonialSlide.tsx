import React from "react";
import Image from "next/image";
import testimonialImage from "../../../public/assets/images/section-testimonial/testimonial-image.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { MdPlayCircle } from "react-icons/md";

interface TestimonialSlideProps {
  text: string;
  link: string;
  person: {
    image: string | StaticImport;
    name: string;
    location: string;
  };
}

const TestimonialSlide: React.FC<TestimonialSlideProps> = ({
  person: { image, location, name },
  text,
  link,
}) => {
  return (
    <div className="h-full flex flex-col">
      <div className="relative h-[300px]">
        <iframe
          className="w-full h-full rounded-3xl"
          src={link}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-grayscale-800 text-lg my-8">{text}</p>
      <div className="flex items-center mt-auto">
        <Image
          src={image}
          alt={`${name} photo`}
          height={44}
          width={44}
          className="rounded-full"
        />
        <div className="pl-4">
          <p className="font-semibold text-grayscale-800">{name}</p>
          <p className="text-sm text-testimonial-location">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide;
