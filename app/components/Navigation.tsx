import React from "react";
import Logo from "@/app/assets/logo.png";
import Image from "next/image";

import menu from "@/app/assets/menu.png";
import person from "@/app/assets/person.png";

const Navigation = () => {
  return (
    <div className="absolute z-10 flex w-full items-center justify-between px-9 py-4 max-[450px]:px-6">
      <Image src={Logo} className="w-[110px] max-[450px]:w-[60px]" alt="logo" />

      {/* todo: Add the shadow */}
      <div className="flex cursor-pointer items-center gap-4 rounded-[40px] bg-white px-5 py-4 max-[450px]:rounded-[20px] max-[450px]:py-3">
        <div>
          <Image
            src={menu}
            className="max-[450px]:w-[20px]"
            alt="menu"
            width={"40"}
          />
        </div>
        <div>
          <Image
            src={person}
            className="max-[450px]:w-[25px]"
            alt="person"
            width={"40"}
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
