import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  id: number;
  person: string;
  rating: number;
  place: string;
  review: string;
  image: StaticImageData;
}

const Testimonial = ({ id, person, rating, place, review, image }: Props) => {
  return (
    <div className="shadow-testimonial rounded-2xl px-7 pt-6 pb-4">
      <div>Testimonial</div>
      <Image src={image} alt={place} className="h-80 object-cover" />
    </div>
  );
};

export default Testimonial;
