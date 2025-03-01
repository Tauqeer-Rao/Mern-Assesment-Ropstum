import React from "react";
import MediaImage from "../../assets/images/media.png";
import MediaPlayicon from "../../assets/icons/media_play.svg";

const RecoveryDeliveredSection = () => {
  return (
    <section className="flex justify-center py-16 sm:py-24 lg:py-32">
      <div className="flex w-[70%] justify-between flex-col lg:flex-row gap-10">
        {/* Title and description */}
        <article className="flex flex-col gap-8 py-7 max-w-[560px]">
          <p className="base_color text-2xl font-medium">
            Welcome To Recovery Delivered
          </p>
          <h1 className="secondary_color text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-5xl leading-tight">
            Your Fully Online Suboxone Treatment Platform
          </h1>
          <div className="description_color flex flex-col gap-6 text-base sm:text-lg lg:text-xl leading-relaxed font-normal ">
            <p>
              100% online opioid treatment with licensed buprenorphine providers
              starts at just $99/month.
            </p>
            <p>
              With monthly and weekly meetings based on where you are in your
              recovery. Get a same-day appointment and script.
            </p>
          </div>
        </article>

        {/* Media image */}
        <div className="relative inline-block ">
          <img
            src={MediaImage}
            alt="media-image"
            loading="lazy"
            className="w-full h-[395px]"
          />
          <img
            src={MediaPlayicon}
            alt="media-play-image"
            loading="lazy"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default RecoveryDeliveredSection;
