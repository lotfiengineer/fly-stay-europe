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
        className="min-h-[65vh] max-h-[80vh] object-cover object-top 2xl:object-[0%_8%]"
        style={{
          width: "100%",
          opacity: "40%",
        }}
      />
    </div>
  );
};

export default Hero;
