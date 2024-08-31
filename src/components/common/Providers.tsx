"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { FC, PropsWithChildren } from "react";

export const progressBarRef = {
  start: () => {},
  finish: () => {},
};

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ProgressBar
        height="2px"
        color="#000000"
        options={{ showSpinner: false }}
        shallowRouting
        
      />
      {children}
    </>
  );
};

export default Providers;
