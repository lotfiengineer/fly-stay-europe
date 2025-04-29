import Image, { StaticImageData } from "next/image";
import spain from "@/app/assets/countries/spain.jpg";
import france from "@/app/assets/countries/france.jpg";
import england from "@/app/assets/countries/england.jpg";
import poland from "@/app/assets/countries/poland.jpg";

const CountriesSuggestion = () => {
  return (
    <div className="mx-auto w-full max-w-[1920px]">
      <div className="relative -top-32 mx-auto flex w-full max-w-2/3 flex-col items-center justify-center rounded-2xl bg-white/90 px-16 py-9 pb-14 shadow-xl max-[1000px]:max-w-5/6 max-[450px]:px-8 max-[435px]:-top-44">
        <div className="text-h2 mb-20 text-center">Explore Countries to go</div>

        <div className="mb-14 flex w-full flex-wrap justify-between gap-6 max-[1112px]:justify-center max-[1112px]:gap-14">
          <Country imageSrc={spain} countryName={"Spain"} />
          <Country imageSrc={france} countryName={"France"} />
          <Country imageSrc={england} countryName={"England"} />
        </div>

        <div className="flex w-full flex-wrap justify-evenly gap-7 max-[1000px]:gap-14">
          <Country imageSrc={poland} countryName={"Poland"} />
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
