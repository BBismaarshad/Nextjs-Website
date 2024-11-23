import Image from "next/image";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#070808]">
      <p className="text-base font-bold text-white">@2024 TechnologyMovie</p>
      <div>
        <h1 className=" uppercase text-2xl  text-[#ee1e38] font-extrabold">
          Movie Zone
        </h1>
      </div>

      <div className="flex items-center gap-6 cursor-pointer">
        <Image
          src="./tiktok.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src="./instagram.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src="./twitter.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
      </div>
    </footer>
  );
}

export default Footer;
