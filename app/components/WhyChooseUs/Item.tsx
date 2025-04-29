import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  icon: StaticImageData;
  title: string;
  caption: string;
}

const Item = ({ icon, title, caption }: Props) => {
  return (
    <div className="flex min-w-[350px] flex-col items-center gap-5 max-[500px]:min-w-[255px]">
      <Image
        src={icon}
        style={{
          width: "128px",
        }}
        alt={title}
      />
      <div className="text-h2 text-center font-bold">{title}</div>
      <div className="text-paragraph-large text-center">{caption}</div>
    </div>
  );
};

export default Item;
