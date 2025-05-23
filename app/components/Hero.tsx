import HeroImage from "@/app/assets/hero_image.jpg";
import Image from "next/image";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <div className="relative w-full max-w-[1920px] self-center bg-black">
      <Navigation />

      <Image
        src={HeroImage}
        alt="waterfall"
        className="max-h-[88vh] min-h-[72vh] object-cover object-top 2xl:object-[0%_8%]"
        style={{
          width: "100%",
          opacity: "40%",
        }}
      />

      <div className="absolute top-[45%] left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <div className="text-h2 max-[450px]:text-h3 mb-6 max-[950px]:mb-1">
          Your best website to
        </div>
        <div className="text-h0 max-[450px]:text-h1 mb-7 max-[950px]:mb-2">
          Fly and Stay
        </div>
        <div className="text-h1 max-[450px]:text-h2">in Europe</div>
      </div>
    </div>
  );
};

export default Hero;
