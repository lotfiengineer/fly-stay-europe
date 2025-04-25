import React from "react";
import FancyTitle from "../common/FancyTitle";
import Testimonial from "./testimonial";
import spain from "@/app/assets/countries/spain.jpg";
import france from "@/app/assets/countries/france.jpg";
import england2 from "@/app/assets/countries/england2.jpg";

const Reviews = () => {
  const testimonialList = [
    {
      id: 0,
      person: "Tom Cruise",
      rating: 5.0,
      place: "Spain",
      review:
        "Energetic, sunny, flavorful. Great food, festivals, and coastal vibes.",
      image: spain,
    },
    {
      id: 1,
      person: "Jack Jackson",
      rating: 4.5,
      place: "England",
      review:
        "Historic, rainy, cozy. Rich culture, pubs, and scenic countryside.",
      image: england2,
    },
    {
      id: 2,
      person: "John Doe",
      rating: 5.0,
      place: "France",
      review:
        "Chic, artistic, delicious. Romance, wine, and timeless elegance.",
      image: france,
    },
  ];

  return (
    <div className="mx-auto w-full max-w-[1920px]">
      <div className="flex flex-col items-center px-6">
        <FancyTitle>Reviews</FancyTitle>
        <div className="mb-9 flex w-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="text-h2 font-bold">
              What people say about FlyStayEurope
            </div>
            <button className="border-secondary-dark rounded-2xl border-[1px] p-2.5 text-2xl">
              See All
            </button>
          </div>
        </div>
        <div className="flex w-full justify-between gap-10 max-[1200px]:flex-wrap max-[1200px]:justify-between max-[1190px]:justify-center">
          {testimonialList.map((i) => (
            <div key={i.id} className="max-w-[520px] min-w-[350px]">
              <Testimonial {...i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
