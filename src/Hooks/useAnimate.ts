import gsap from "gsap";
import { useEffect, useState } from "react";

type TypeEventsToAnimate = "hover" | "click" | "mouseleave" | "mouseenter";

interface IAddEvent {
  selector: string;
  event: TypeEventsToAnimate;
  type: "to" | "from";
  animation: gsap.TweenVars;
}
function useNewAnimate<T>(
  scope: any,
  callback: (addEvent: (data: IAddEvent) => void, gsap: GSAP) => void,
  dependencies: any[]
) {
  //funcion que simplifica el codigo de añadir acciones a eventos del dom
  function addEvent(data: IAddEvent) {
    //elegir que funcion utilizar
    const funcAnimate = data.type === "to" ? gsap.to : gsap.from;
    //devolver animacion

    document.querySelectorAll(data.selector).forEach((element) => {
      //hover es un evento compuesto por mouseenter y mouseleave
      if (data.event === "hover") {
        const animate = funcAnimate(element, data.animation);
        animate?.pause();
        element.addEventListener("mouseenter", () => {
          animate?.play();
        });
        element.addEventListener("mouseleave", () => {
          animate?.reverse();
        });
      } else {
        //event DOM
        element.addEventListener(data.event, (event) =>
          funcAnimate(element, data.animation)
        );
      }
    });
  }

  useEffect(() => {
    //el contexto me ayuda a solo realizar animaciones dentro de ese elemento, asi puedo utilizar los QuerySelectors con mas seguiridad
    const ctx = gsap.context(() => {
      callback(addEvent, gsap);
    }, scope);
    ctx.add;
    //cuando se desmonte el coponente que llamo al hook se limpia los animaciones que se hicieron(importante cunado se esta desarrollando)
    return () => ctx.revert();
  }, dependencies);

  return {};
}

export function useAnimate(
  root?: Element | null,
  callback?: (addEvent: (data: IAddEvent) => void) => void
) {
  const [ctx, setContex] = useState(gsap.context(() => {}, root || undefined));
  //añade animaciones a los elementos del  DOM
  function addEvent(data: IAddEvent) {
    //elegir que funcion utilizar
    const funcAnimate = data.type === "to" ? gsap.to : gsap.from;
    //devolver animacion

    document.querySelectorAll(data.selector).forEach((element) => {
      //hover es un evento compuesto por mouseenter y mouseleave
      if (data.event === "hover") {
        const animate = funcAnimate(element, data.animation);
        animate?.pause();
        element.addEventListener("mouseenter", () => {
          animate?.play();
        });
        element.addEventListener("mouseleave", () => {
          animate?.reverse();
        });
      } else {
        //event DOM
        element.addEventListener(data.event, (event) =>
          funcAnimate(element, data.animation)
        );
      }
    });
  }

  useEffect(() => {
    callback && ctx.add(() => callback(addEvent));
    return () => ctx.revert();
  }, []);

  return ctx;
}
