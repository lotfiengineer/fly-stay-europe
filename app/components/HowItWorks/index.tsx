import React from "react";
import FancyTitle from "../common/FancyTitle";
import ProcessStep from "./ProcessStep";

const HowItWorks = () => {
  return (
    <div className="mb-28 flex flex-col items-center p-10 max-[650px]:px-6">
      <FancyTitle>How it works?</FancyTitle>

      <ProcessStep />
    </div>
  );
};

export default HowItWorks;
