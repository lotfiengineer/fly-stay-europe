import Image, { StaticImageData } from "next/image";
import spain from "@/app/assets/countries/spain.jpg";
import france from "@/app/assets/countries/france.jpg";
import england from "@/app/assets/countries/england.jpg";
import poland from "@/app/assets/countries/poland.jpg";

const CountriesSuggestion = () => {
  return (
    <div className="flex justify-center">
      <div className="relative -top-32 mx-auto flex w-full max-w-2/3 flex-col items-center justify-center rounded-2xl bg-white/90 px-16 py-9 pb-14 shadow-xl">
        <div className="text-h2 mb-20">Explore Countries to go</div>

        <div className="mb-14 flex w-full justify-between">
          <Country imageSrc={spain} countryName={"Spain"} />
          <Country imageSrc={france} countryName={"France"} />
          <Country imageSrc={england} countryName={"Poland"} />
        </div>

        <div className="flex w-full justify-around">
          <Country imageSrc={poland} countryName={"England"} />
          <div className="text-h3 flex h-[160px] w-[185px] items-center justify-center rounded-2xl bg-[#3D3D3D] font-bold text-white">
            Explore More
          </div>
        </div>
      </div>
    </div>
  );
};

const Country = ({
  imageSrc,
  countryName,
}: {
  imageSrc: StaticImageData;
  countryName: string;
}) => {
  return (
    <div className="relative h-[160px] w-[185px] rounded-2xl bg-black">
      <Image
        src={imageSrc}
        className="h-full rounded-2xl object-cover opacity-50"
        alt="Spain"
      />
      <p className="text-h2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white">
        {countryName}
      </p>
    </div>
  );
};

export default CountriesSuggestion;
