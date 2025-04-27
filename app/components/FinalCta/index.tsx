import venice from "@/app/assets/countries/venice.jpg";
import Image from "next/image";

const FinalCta = () => {
  return (
    <div className="relative mx-auto mb-36 flex h-[520px] w-full max-w-[1920px] justify-center px-10 max-[695px]:h-[670px]">
      <div className="h-full rounded-2xl bg-black">
        <Image
          src={venice}
          alt="venice"
          className="h-full rounded-2xl object-cover opacity-30"
        />
      </div>
      <div className="absolute flex h-full w-full flex-col items-center justify-center gap-9 rounded-2xl px-10 py-8 text-white">
        <div className="text-h1 px-4 text-center font-bold">
          Your Next European Adventure Awaits!
        </div>
        <div className="w-full max-w-[635px] px-4 text-center text-4xl">
          Picture yourself strolling through the streets of Paris, exploring the
          canals of Venice, or relaxing on a beach in Greece. Make it happen
          today!
        </div>
        <div className="px-4">
          <button className="bg-primary-normal text-h3 rounded-2xl px-16 py-3 font-bold text-white">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalCta;
