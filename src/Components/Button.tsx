import { CSSProperties, ReactNode, useRef } from "react";
import { useAnimate } from "../Hooks/useAnimate";

type TypesButtons = "primary" | "secondary" | "other";
interface IButton {
  type?: TypesButtons;
  st?: CSSProperties;
  children?: ReactNode;
}
export default function Button({
  children,
  st = {},
  type = "primary",
}: IButton) {
  //select styles
  let ButtonStyle: CSSProperties = {};
  switch (type) {
    case "primary" || undefined:
      ButtonStyle = {
        background: "linear-gradient(180deg,#ACCF48 0%,#7B9C1D 100%)",
        padding: "10px 20px",
        width: "fit-content",
        borderRadius: "15px",
        boxShadow: "0px 4px 4px #0003",
        color: "#000",
        outline: "none",
      };
      break;
    case "secondary":
      ButtonStyle = {
        background: "#6C6C6C",
        padding: "10px 20px",
        width: "fit-content",
        borderRadius: "15px",
        boxShadow: "0px 4px 4px #0003",
        color: "#FFF",
        outline: "none",
      };
      break;
  }

  //create animations

  const { refAnimate } = useAnimate("hover", ButtonStyle, {
    background: "#0000",
    outline: "3px solid #7B9C1D",
    color: "#FFF",
  });

  //Render
  return (
    <div
      ref={refAnimate}
      style={{
        ...ButtonStyle,
        ...st,
      }}
    >
      {children}
    </div>
  );
}
