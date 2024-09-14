"use client";

import { FC, PropsWithChildren } from "react";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export const progressBarRef = {
  start: () => {},
  finish: () => {},
};

const ProgressBarProvider: FC<PropsWithChildren> = ({ children }) => {
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

export default ProgressBarProvider;
