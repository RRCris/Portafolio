import { useEffect, useState } from "react";
import { sizeWindow } from "../utils/sizeWindow";

export default function useSizeWindow() {
  const [width, setWidth] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  function handleResize() {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width, height, responsive: sizeWindow(width || 1800) };
}
