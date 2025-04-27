import React from "react";
import FancyTitle from "../common/FancyTitle";
import Item from "./Item";

import booking from "@/app/assets/booking.png";
import best_prices from "@/app/assets/best_prices.png";
import trust from "@/app/assets/trust.png";

const WhyChooseUs = () => {
  const itemsList = [
    {
      icon: booking,
      title: "Easy Booking",
      caption: "Fast & secure reservations.",
    },
    {
      icon: best_prices,
      title: "Best Prices",
      caption: "Competitive deals on flights & stays.",
    },
    {
      icon: trust,
      title: "Trusted By Travelers",
      caption: "Safe & reliable service.",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-[1920px] bg-[#00A11B]/15 py-14 pt-20 mb-36">
      <div className="flex flex-col items-center">
        <FancyTitle>Why Choose Us</FancyTitle>
        <div className="flex w-full justify-around px-14 py-12">
          {itemsList.map((i) => (
            <div key={i.title} className="flex-1/3">
              <Item
                {...i}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
