import React from "react";
import FancyTitle from "../common/FancyTitle";
import ProcessStep from "./ProcessStep";

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center p-10">
      <FancyTitle>How it works?</FancyTitle>

      <ProcessStep />
    </div>
  );
};

export default HowItWorks;
