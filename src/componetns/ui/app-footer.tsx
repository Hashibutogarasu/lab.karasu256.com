"use client";

import { Github, Twitter } from "lucide-react";
import Link from "next/link";
import config from "@/config/site-config.json";

export const Footer = () => (
  <footer className={`flex justify-between items-center p-4 bg-background text-foreground mt-8`} style={{ position: "absolute", bottom: 0, width: "100%", padding: "20px" }}>
    <span>This app is built with Tailwind CSS and Next.js</span>
    <div className="flex space-x-4">
      <div style={{ marginRight: "1em" }}>
        <Link href={`https://github.com/${config.author}`} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
          <Github className="h-5 w-5" />
        </Link>
      </div>
      <div style={{ marginRight: "1em" }}>
        <Link href={config.twitter} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
          <Twitter className="h-5 w-5" />
        </Link>
      </div>
    </div>
  </footer >
)