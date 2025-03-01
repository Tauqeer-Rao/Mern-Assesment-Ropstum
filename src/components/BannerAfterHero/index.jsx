import React from "react";
import BgBanner from "../../assets/gifs/home_banner.gif";
import StatCard from "./StatCard";

const HomeBanner = () => {
  return (
    <section
      className="w-full flex justify-center bg-cover bg-center mix-blend-lighten py-[60px] relative"
      style={{ backgroundImage: `url(${BgBanner})` }}
    >
      {/*Bg Overlay */}
      <div className="absolute inset-0 bg-white opacity-80"></div>

      <div className="flex w-[70%] gap-6 justify-between flex-col lg:flex-row relative z-10">

        <article className="w-full lg:w-[40%] flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium secondary_color">
            Breaking Barriers to Recovery
          </h1>
          <p className="text-base sm:text-lg description_color">
            Our mission is to make Medication Assisted Treatment accessible to
            people in both major cities and rural communities. We’re deeply
            committed to removing obstacles to recovery, ensuring our clients
            get the support they need.
          </p>
        </article>

        <article className="w-full lg:w-[50%] flex flex-col justify-between gap-6">
          <p className="text-base sm:text-lg description_color">
            We’re not just offering a service; we’re creating a lifeline. Our
            platform is designed to eliminate the challenges that often stand in
            the way of recovery—whether it’s stigma, inconvenience, or lack of
            access to quality care.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatCard value="500+" label="Patients Treated" />
            <StatCard value="300+" label="Centers Nationwide" />
            <StatCard value="4.9/5" label="Patients Satisfaction" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default HomeBanner;
