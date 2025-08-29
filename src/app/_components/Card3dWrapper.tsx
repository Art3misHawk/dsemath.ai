'use client';

import Card3d from "card3d";
import { useEffect, useRef } from "react";

export default function Card3dWrapper({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      new Card3d(wrapperRef.current, { perspective: 1000, fullPageListening: true });
    }
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
}