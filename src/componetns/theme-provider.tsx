"use client";

import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";
import { FC } from "react";
import Loading from "./loading";

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  return <Loading>
    <NextThemesProvider {...props}>{props.children}</NextThemesProvider>
  </Loading>;
};