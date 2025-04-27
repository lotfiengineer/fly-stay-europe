import React from "react";
import Logo from "@/app/assets/logo.png";
import Image from "next/image";

import menu from "@/app/assets/menu.png";
import person from "@/app/assets/person.png";

const Navigation = () => {
  return (
    <div className="absolute z-10 flex w-full items-center justify-between px-9 py-4">
      <Image
        src={Logo}
        style={{
          width: "130px",
        }}
        alt="logo"
      />

      {/* todo: Add the shadow */}
      <div className="flex cursor-pointer items-center gap-4 rounded-[40px] bg-white px-5 py-4 ">
        <div>
          <Image src={menu} alt="menu" width={"40"} />
        </div>
        <div>
          <Image src={person} alt="person" width={"40"} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
