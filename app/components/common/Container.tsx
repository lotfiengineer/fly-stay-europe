import React, { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return <div className="max-w-[1920px] w-full">{children}</div>;
};

export default Container;
