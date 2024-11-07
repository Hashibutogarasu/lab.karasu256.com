/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import ThemeSwitch from "./theme-switch";
import config from "@/config/site-config.json";
import Link from "next/link";
import styles from "@/componetns/styles/app-header.module.css";

export function AppHeader() {
  return <header className="flex justify-between items-center p-4 bg-background text-foreground" style={{ padding: "20px" }}>
    <div className={styles.appHeader}>
      <Link href="/" className={styles.appTitle}>
        {config.title}
      </Link>
      <div className={styles.headerSpacer} />
      <Link color="headerChild" href="/mods">
        mods
      </Link>
    </div>

    <div className="flex items-center space-x-4">
      <ThemeSwitch />
    </div>
  </header>;
}