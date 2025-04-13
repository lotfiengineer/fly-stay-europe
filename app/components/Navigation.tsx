import React from "react";
import Logo from "@/app/assets/logo.png";
import Image from "next/image";

const Navigation = () => {
  return (
    <div className="absolute px-9 py-4 w-full z-10 flex justify-between items-center">
      <Image
        src={Logo}
        style={{
          width: "130px",
        }}
        alt="logo"
      />

      {/* todo: Add the shadow */}
      <div className="bg-white rounded-[40px] flex gap-6 py-4 px-7 items-center cursor-pointer ">
        <div>Profile</div>
        <div>Menu</div>
      </div>
    </div>
  );
};

export default Navigation;
