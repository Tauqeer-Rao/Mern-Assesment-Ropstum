import React from "react";
import USImage from "../../assets/images/US_Image.png";
import LocationIcon from "../../assets/icons/location.svg";
import InteractiveUSMap from "./USMap";

const ServingState = () => {
  return (
    <section className="flex justify-center py-12 sm:py-16 lg:py-20">
      <div className="flex gap-8 lg:gap-12 justify-center flex-col w-[70%]">
        <header className="flex flex-col gap-4 text-center items-center">
          <p className="text-xl sm:text-2xl font-medium base_color">STATES WE</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight secondary_color">
            Currently Serve
          </h1>
          <p className="description_color text-base sm:text-lg lg:text-xl leading-relaxed max-w-[991px]">
            We believe everyone should have access to treatment and care. That’s
            why we’re teaming up with providers all over the country. Click on a
            green state to see the insurance companies we currently accept and
            to learn more about online Suboxone doctors in your area.
          </p>
        </header>


        <div className="w-full mt-8 lg:mt-10">
          <div className=" flex justify-between flex-col lg:flex-row gap-8">

            <div className="w-full lg:w-[30%] flex flex-col gap-6">
              <img
                src={USImage}
                alt="us-image"
                className="w-full h-auto rounded-lg"
              />
              <div className="flex flex-col gap-4">
                <p className="text-2xl sm:text-3xl font-bold">Toronto</p>
                <div className="flex gap-2">
                  <img
                    src={LocationIcon}
                    alt="location-icon"
                    className="w-4 h-4 self-center"
                  />
                  <p className="text-base sm:text-lg base_color underline">
                    Ottawa St. and Homer Waston Blvd.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[60%]">
              <InteractiveUSMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServingState;
