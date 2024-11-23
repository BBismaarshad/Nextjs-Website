import Image from "next/image";
import Searchbar from "./Searchbar";

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-10 md:py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-10">
        <div className="mx-30 flex text-center items-center justify-between sm:flex-row flex-col">
          <div>
            <h1 className="uppercase text-2xl text-[#ee1e38] font-extrabold">
              Movie Zone
            </h1>
          </div>
          <div className="flex space-x-6 sm:mt-0 mt-4">
            <button className=" relative flex h-[40px] w-[90px] items-center justify-center font-semibold overflow-hidden bg-[#ee1e38] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 rounded-full hover:bg-[#ff5956]">
              <span className="relative z-10">Signup</span>
            </button>
            <button className="relative flex h-[40px] w-[90px] items-center justify-center font-semibold overflow-hidden bg-[#ee1e38] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 rounded-full hover:bg-[#ff5956]">
              <span className="relative z-10">Login</span>
            </button>
          </div>
        </div>
        <h1 className="my-16 sm:text-5xl text-center text-4xl text-white lg:max-w-lg font-bold leading-[120%]">
          Experience
          <span className="red-gradient">Movies</span> in a Whole New Dimension!
        </h1>
      </div>
      <Searchbar />
    </header>
  );
}

export default Hero;
