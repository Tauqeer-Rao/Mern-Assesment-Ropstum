import React from "react";
import TestimonialCard from "./Cards";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="flex justify-center mb-28">
      <div className="flex flex-col gap-10 w-[70%]">

        {/* Title and Subtitle */}
        <header className="flex flex-row gap-6 text-center lg:text-left justify-between">
          <div className="w-full  flex flex-col gap-6 sm:gap-3 xxs:justify-center md:text-start">
            <p className="text-xl sm:text-2xl font-medium base_color ">
              OUR CLIENT'S
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight secondary_color">
              Testimonials
            </h1>
          </div>
          <div className="flex-row gap-3 self-center hidden md:flex">
            <CircleArrowLeft className="text-[#475569] cursor-pointer" />
            <CircleArrowRight className="text-[#49C7AB] cursor-pointer" />
          </div>
        </header>

        {/* Testimonial Cards */}
        <div className="w-full">
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
