import React from "react";
import LinerBg from "../../assets/images/linear_bg.svg";
import ArrowUp from "../../assets/icons/arrow_up.svg";
import LinearBgGif from "../../assets/gifs/linear_bg.gif";
import StepCard from "./StepCard";

const GetSameDayOnline = () => {
  return (
    <section
      className="flex justify-center relative z-50 py-16 sm:py-24 lg:py-20"
      style={{ backgroundImage: `url(${LinerBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Background GIF */}
      <img
        src={LinearBgGif}
        alt="Background Animation"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] object-cover z-0 mix-blend-darken"
      />

      <div className=" w-[70%] flex flex-col gap-12 lg:gap-24 z-10">
        {/* Title Header */}
        <header className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
          <div className="flex flex-col gap-4">
            <p className="text-xl sm:text-2xl font-medium base_color">
              GET SAME DAY ONLINE
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight secondary_color">
              Suboxone Treatment In 10 Minutes
            </h1>
          </div>
          <div className="self-center">
            <button className="flex bg-[#49C7AB] text-base sm:text-lg font-bold font-frank_luhi px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-white">
              Download The App Today
              <img src={ArrowUp} alt="arrow-up" className="ml-2 w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </div>
        </header>

        {/* Steps Section */}
        <div className="flex flex-col gap-8 lg:gap-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            <StepCard
              step="Step 1"
              title="Download The App"
              description="Click the link to download our app to get started."
            />
            <StepCard
              step="Step 2"
              title="Complete Onboarding Process & Documents"
              description="Provide medical history and sign treatment forms."
              align="right"
            />
            <StepCard
              step="Step 3"
              title="Schedule Your First Visit"
              description="Our onboarding team will send you a link to book your first meeting. Many times, this is the same day."
            />
            <StepCard
              step="Step 4"
              title="Meet With Licensed Provider"
              description="At the time of your appointment, open the app on your phone to have your visit."
              align="right"
            />
          </div>

          {/* Step 5 */}
          <div className="w-full flex justify-center">
            <StepCard
              step="Step 5"
              title="Pick Up Medication"
              description="Your script will be sent to your pharmacy of choice for pick up the same day."
              center
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetSameDayOnline;