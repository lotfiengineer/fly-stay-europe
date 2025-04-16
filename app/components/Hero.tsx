import HeroImage from "@/app/assets/hero_image.jpg";
import Image from "next/image";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <div className="bg-black max-w-[1920px] w-full relative">
      <Navigation />

      <Image
        src={HeroImage}
        alt="waterfall"
        className="min-h-[68vh] max-h-[88vh] object-cover object-top 2xl:object-[0%_8%]"
        style={{
          width: "100%",
          opacity: "40%",
        }}
      />

      <div className="absolute text-white top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="mb-6 text-h2 font-bold">Your best website to</div>
        <div className="mb-7 text-h0 font-bold">Fly and Stay</div>
        <div className="text-h1 font-bold">in Europe</div>
      </div>
    </div>
  );
};

export default Hero;
