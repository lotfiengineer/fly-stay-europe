import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  icon: StaticImageData;
  title: string;
  caption: string;
}

const Item = ({ icon, title, caption }: Props) => {
  return (
    <div className="flex flex-col items-center gap-9">
      <Image
        src={icon}
        style={{
          width: "128px",
        }}
        alt={title}
      />
      <div className="text-h2 font-bold">{title}</div>
      <div className="text-paragraph-large">{caption}</div>
    </div>
  );
};

export default Item;
