/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Moon, Settings, Sun } from "lucide-react";
import ThemeSwitch from "./theme-switch";
import config from "@/config/site-config.json";
import Link from "next/link";


export function AppHeader() {
  return <header className="flex justify-between items-center p-4 bg-background text-foreground" style={{ padding: "20px" }}>
    <h1 className="text-2xl font-bold">
      <Link href="/">
        {config.title}
      </Link>
    </h1>
    <div className="flex items-center space-x-4">
      <ThemeSwitch />
    </div>
  </header>;
}