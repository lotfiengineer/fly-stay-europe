import Image from "next/image";
import React from "react";

import destination from "@/app/assets/steps/destination.png";
// import flight from "@/app/assets/steps/flight.png";
// import hotel from "@/app/assets/steps/hotel.png";

const ProcessStep = () => {
  return (
    <div className="mx-auto w-full max-w-[980px]">
      <div className="flex w-full flex-col">
        <div className="grid grid-cols-[1fr_200px_1fr] items-center justify-items-center gap-5">
          <div className="flex w-full max-w-72 flex-col">
            <div className="text-h3 mb-5 font-bold">Choose a destination</div>
            <div className="text-paragraph-large mb-10">
              Pick from the best European countries and start planning your
              adventure.
            </div>
            <div className="font-bold">- - - - - - - - - - - - - - - - - - - - - - - - - -</div>
          </div>
          <div className="shadow-container border-primary-normal shadow-primary-light/60 flex h-min w-min flex-col justify-around rounded-3xl p-2 px-6">
            <div className="text-h2 text-center font-bold text-[#8E8E8E]">
              STEP
            </div>
            <div className="text-h1 text-center font-bold">01</div>
          </div>
          <div className="w-full max-w-72">
            <Image src={destination} alt="destination" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;
