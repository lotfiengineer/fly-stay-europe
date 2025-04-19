import React from "react";
import FancyTitle from "../common/FancyTitle";
import Item from "./Item";

const WhyChooseUs = () => {
  const itemsList = [
    {
      icon: "",
      title: "",
      caption: "",
    },
    {
      icon: "",
      title: "",
      caption: "",
    },
    {
      icon: "",
      title: "",
      caption: "",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-[1920px] bg-[#00A11B]/15 py-12">
      <div className="flex flex-col items-center">
        <FancyTitle>Why Choose Us</FancyTitle>
        <div className="flex w-full justify-between px-14 py-12">
          {itemsList.map((i) => (
            <Item />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
