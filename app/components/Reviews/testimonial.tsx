import Image, { StaticImageData } from "next/image";
import star from "@/app/assets/star.png";

interface Props {
  person: string;
  rating: number;
  place: string;
  review: string;
  image: StaticImageData;
}

const Testimonial = ({ person, rating, place, review, image }: Props) => {
  return (
    <div className="shadow-testimonial rounded-2xl px-7 pt-6 pb-4">
      <div className="mb-4 flex text-4xl">
        <div>{person}</div>
      </div>
      <div className="mb-7 flex justify-between">
        <div className="text-paragraph-large">{place}</div>
        <div className="flex items-center gap-1.5">
          <div>{rating}</div> <Image src={star} alt="stars" className="w-6" />
        </div>
      </div>
      <div className="mb-5 text-xl text-[#515151]">{review}</div>
      <Image src={image} alt={place} className="h-80 rounded-lg object-cover" />
    </div>
  );
};

export default Testimonial;
