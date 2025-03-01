import React, { useState } from "react";
import HeroBanner from "../../assets/images/hero.png";
import ArrowUp from "../../assets/icons/arrow_up.svg";
import { MenuIcon } from "lucide-react";
import { Drawer } from 'antd';


const Hero = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const showDrawer = () => {
    setIsDrawerOpen(true);
  };

  const onClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <section
      className="w-full h-screen xxs:h-[50vh] md:h-[70vh] lg:h-[800px] 2xl:h-[1080px] bg-cover bg-center flex justify-center"
      style={{ backgroundImage: `url(${HeroBanner})` }}
    >
      {/* wrapper */}
      <div className="flex flex-col justify-between w-[70%]  h-[70%]">
        {/* topbar */}
        <header className="text-white">
          <nav className="flex justify-between items-center mt-10 xxs:px-5 sm:px-5 lg:px-7 2xl:px-10 xxs:py-4 2xl:py-6 bg-opacity-20 backdrop-blur-sm rounded-xl">
            <div className="xxs:text-base xs:text-lg sm:text-xl md:text-2xl lg:text-4xl 2xl:text-6xl font-bold font-cabinet_grostek">
              LOGO
            </div>

            {/* Toggler for drawer on small screen */}
            <div className="lg:hidden">
              <MenuIcon onClick={showDrawer} />
            </div>

            {/* Full Navigation Links (visible on larger screens) */}
            <div className="hidden lg:flex xxs:gap-2 sm:gap-3 md:gap-4 lg:gap-6 2xl:gap-10 xxs:text-sm md:text-base 2xl:text-lg font-normal text-[#F1F5F9]">
              <p className="text-white font-bold">Home</p>
              <p>About us</p>
              <p>Owners</p>
              <p>Tenants</p>
              <p>Properties</p>
            </div>

            {/* Button (visible on larger screens) */}
            <div className="hidden lg:block">
              <button className="bg-[#49C7AB] xxs:text-sm lg:text-base 2xl:text-lg rounded-lg xxs:px-2 md:px-3 lg:px-4 2xl:px-8 xxs:py-2 lg:py-2 2xl:py-4 font-frank_luhi">
                Start Treatment
              </button>
            </div>
          </nav>
        </header>

        {/* hero bottom */}
        <div className="flex flex-col gap-3 lg:gap-6 text-white xxs:mt-10 lg:mt-0">
          <div>
            <p className="xxs:text-sm md:text-lg lg:text-lg 2xl:text-2xl font-normal text-[#F1F5F9]">
              No lines. Less hassle, Lower costs.
            </p>
          </div>
          <div className="w-full md:w-[80%] lg:w-[60%]">
            <h1 className="xxs:text-lg xs:text-lg sm:text-2xl md:text-4xl lg:text-5xl 2xl:text-7xl leading-tight font-medium font-cabinet_grostek">
              Easy Online Suboxone Treatment for Opioid Addiction
            </h1>
          </div>
          <div className="flex mt-4">
            <button className="flex bg-[#49C7AB] xxs:text-sm xs:text-sm 2xl:text-lg font-bold font-frank_luhi xxs:px-2 md:px-3 2xl:px-4 xxs:py-2 sm:py-3 2xl:py-[14px] rounded-lg items-center">
              Download The App Today
              <img src={ArrowUp} alt="Arrow up icon" className="ml-[6px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Side drawer for small screen */}
      {isDrawerOpen && (
        <Drawer onClose={onClose} open={isDrawerOpen}>
          <div className="flex flex-col gap-4">
            <p className="text-black font-bold">Home</p>
            <p>About us</p>
            <p>Owners</p>
            <p>Tenants</p>
            <p>Properties</p>
          </div>

          <button className="mt-6 bg-[#49C7AB] text-white xxs:text-sm lg:text-base rounded-lg w-full py-2">
            Start Treatment
          </button>
        </Drawer>
      )}
    </section>


  );
};

export default Hero;