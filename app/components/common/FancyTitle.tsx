import { PropsWithChildren } from "react";

const FancyTitle = ({ children }: PropsWithChildren) => {
  return (
    <div className="border-primary-normal shadow-primary-light/60 shadow-container mb-12 w-fit rounded-full border px-12 py-7">
      <p className="text-h2 text-center font-bold">{children}</p>
    </div>
  );
};

export default FancyTitle;
