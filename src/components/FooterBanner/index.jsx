import React from "react";
import ArrowUp from "../../assets/icons/arrow_up.svg";
import BgGradient from "../../assets/images/footer_banner_layer.svg";
import BgMedia from "../../assets/gifs/footer_banner_giff.gif";

const FooterBanner = () => {
  return (
    <section
      className="flex justify-center relative z-50 py-12 sm:py-16 lg:py-20 mt-10"
      style={{ backgroundImage: `url(${BgGradient})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Background Animation */}
      <img
        src={BgMedia}
        alt="Background Animation"
        className="absolute inset-0 w-full h-full object-cover z-0 mix-blend-overlay opacity-50"
      />

      <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 flex flex-col gap-8 text-center">
        {/* Title and Subtitle */}
        <header className="flex flex-col gap-4">
          <p className="text-xl sm:text-2xl font-normal">
            SECURE ACCESS TO YOUR MEDICATIONS
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium">
            Get Your Meds Online Today
          </h1>
        </header>

        {/* Description */}
        <div className="flex justify-center">
          <p className="text-base sm:text-lg lg:text-xl font-normal max-w-[867px]">
            We have partnered with RX-Outreach to provide mail order medications
            at a fraction of the price you may find in your local pharmacy. Meet
            your chronic illness provider online today and get your medication
            delivered as quickly as 24 hours later.
          </p>
        </div>

        <div className="flex justify-center">
          <button
            className="flex bg-black text-white text-base sm:text-lg font-bold font-frank_luhi px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-opacity-90 transition-opacity"
            aria-label="Get the App"
          >
            Get the App
            <img src={ArrowUp} alt="arrow-up" className="ml-2 w-4 h-4 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FooterBanner;