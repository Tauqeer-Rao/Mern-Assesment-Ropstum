import React from "react";
import CBCNews from "../../assets/icons/Featured/CBS News.svg";
import ABC from "../../assets/icons/Featured/ABC.svg";
import NBC from "../../assets/icons/Featured/NBC.svg";
import FOX from "../../assets/icons/Featured/FOX.svg";

const FeaturedOn = () => {
  const logos = [
    { src: CBCNews, alt: "CBC News" },
    { src: ABC, alt: "ABC News" },
    { src: NBC, alt: "NBC News" },
    { src: FOX, alt: "FOX News" },
  ];

  const IconsInLoop = [...logos, ...logos, ...logos];

  return (
    <section className="flex justify-center py-12 sm:py-16 lg:py-24">
      <div className="w-[70%]  flex flex-col lg:flex-row lg:gap-0 gap-10">
        {/* Title Header */}
        <header className="flex flex-col gap-4 w-full text-center lg:text-left">
          <p className="text-xl sm:text-2xl font-medium base_color">AS SEEN</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight secondary_color">
            Featured On
          </h1>
        </header>

        {/* Featured Carousel */}
        <div className="w-full overflow-hidden relative self-end">
          <div className="flex gap-8 sm:gap-16 animate-scroll">
            {IconsInLoop.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-12 sm:h-16 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn;