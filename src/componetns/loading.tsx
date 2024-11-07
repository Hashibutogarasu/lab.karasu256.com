"use client";

import { useEffect, useState } from "react";
import LoadingSpinner from "./ui/loading-spinner";

export default function Loading({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  // fade color with transition 
  return <>
    {loading ? <div className={`min-h-screen flex items-center justify-center`}>
      <div className="text-3xl font-semibold">
        <LoadingSpinner />
      </div>
    </div> : children}
  </>
}