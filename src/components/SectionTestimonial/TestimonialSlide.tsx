import React from "react";
import Image from "next/image";
import testimonialImage from "../../../public/assets/images/section-testimonial/testimonial-image.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { MdPlayCircle } from "react-icons/md";

interface TestimonialSlideProps {
  text: string;
  person: {
    image: string | StaticImport;
    name: string;
    location: string;
  };
}

const TestimonialSlide: React.FC<TestimonialSlideProps> = ({
  person: { image, location, name },
  text,
}) => {
  return (
    <div>
      <div className="relative">
        <Image
          src={testimonialImage}
          alt="Testimonial Video"
          width={376}
          height={240}
          quality={100}
          className="object-cover rounded-2xl"
        />
        <button className="absolute w-[56px] h-[56px] text-[56px] text-white inset-0 m-auto hover:scale-125 transition-all duration-500 ease-in-out">
          <MdPlayCircle />
        </button>
      </div>
      <p className="text-grayscale-800 text-lg my-8">{text}</p>
      <div className="flex items-center">
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
