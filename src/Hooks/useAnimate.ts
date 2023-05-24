import { CSSProperties, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type TypeEventsToAnimate = "hover" | "click";
export function useAnimate(
  event: TypeEventsToAnimate,
  originalCSS: CSSProperties,
  animateCSS: CSSProperties
) {
  const refAnimate = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      switch (event) {
        case "hover":
          refAnimate.current?.addEventListener("mouseenter", () => {
            gsap.to(refAnimate.current, {
              ...animateCSS,
            });
          });

          refAnimate.current?.addEventListener("mouseleave", () => {
            gsap.to(refAnimate.current, {
              ...originalCSS,
            });
          });
          break;
      }
    });

    return () => ctx.revert(); //clear animations
  }, []);

  return { refAnimate };
}
