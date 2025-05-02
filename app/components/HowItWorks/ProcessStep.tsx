import Image from "next/image";
import React from "react";

import destination from "@/app/assets/steps/destination.png";
import flight from "@/app/assets/steps/flight.png";
import hotel from "@/app/assets/steps/hotel.png";

const data = [
  {
    title: "Choose a destination",
    description:
      "Pick from the best European countries and start planning your adventure.",
    stepNumber: "01",
    icon: destination,
  },
  {
    title: "Book your flight",
    description:
      "Find the best deals on flights and secure your trip hassle-free",
    stepNumber: "02",
    icon: flight,
  },
  {
    title: "Find the perfect hotel",
    description: "Stay in top-rated hotels that fit your style and budget.",
    stepNumber: "03",
    icon: hotel,
  },
];

const ProcessStep = () => {
  return (
    <div className="mx-auto w-full max-w-[980px] max-[650px]:pt-10">
      <div className="relative flex w-full flex-col gap-14 max-[650px]:gap-20">
        {/* Vertical line */}
        <div className="bg-neutral-light absolute top-0 left-1/2 -z-10 h-full w-px -translate-x-1/2 max-[650px]:left-0" />

        {data.map((item, index) => (
          <div
            key={index}
            className="relative z-10 grid grid-cols-[1fr_200px_1fr] items-center justify-items-center gap-5 max-[650px]:grid-cols-1 max-[650px]:justify-items-start max-[650px]:pl-5"
          >
            {index === 1 ? (
              <>
                {/* Image First for second item */}
                <div className="w-full max-w-72">
                  <Image src={item.icon} alt={item.title} />
                </div>
                <div className="shadow-container border-primary-normal shadow-primary-light/60 flex h-min w-min flex-col justify-around rounded-3xl bg-white p-2 px-6 max-[650px]:row-start-1">
                  <div className="text-h2 max-[650px]:text-h3 text-center font-bold text-[#8E8E8E]">
                    STEP
                  </div>
                  <div className="text-h1 max-[650px]:text-h2 text-center font-bold">
                    {item.stepNumber}
                  </div>
                </div>
                <div className="flex w-full max-w-72 flex-col max-[650px]:row-start-2 max-[650px]:max-w-full">
                  <div className="text-h3 mb-5 font-bold">{item.title}</div>
                  <div className="text-paragraph-large mb-10 max-[650px]:mb-2">
                    {item.description}
                  </div>
                  <div className="border-b border-dashed font-bold max-[650px]:hidden"></div>
                </div>
              </>
            ) : (
              <>
                {/* Normal order for others */}
                <div className="flex w-full max-w-72 flex-col max-[650px]:max-w-full">
                  <div className="text-h3 mb-5 font-bold">{item.title}</div>
                  <div className="text-paragraph-large mb-10 max-[650px]:mb-2">
                    {item.description}
                  </div>
                  <div className="border-b border-dashed font-bold max-[650px]:hidden"></div>
                </div>
                <div className="shadow-container border-primary-normal shadow-primary-light/60 flex h-min w-min flex-col justify-around rounded-3xl bg-white p-2 px-6 max-[650px]:row-start-1">
                  <div className="text-h2 max-[650px]:text-h3 text-center font-bold text-[#8E8E8E]">
                    STEP
                  </div>
                  <div className="text-h1 max-[650px]:text-h2 text-center font-bold">
                    {item.stepNumber}
                  </div>
                </div>
                <div className="w-full max-w-72">
                  <Image src={item.icon} alt={item.title} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessStep;
