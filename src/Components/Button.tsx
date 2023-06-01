import { CSSProperties, ReactNode, useRef } from "react";
import { useAnimate } from "../Hooks/useAnimate";

type TypesButtons = "primary" | "secondary" | "text";
interface IButton {
  type?: TypesButtons;
  st?: CSSProperties;
  children?: ReactNode;
}
const StylesButton = {
  primary: {
    background: "linear-gradient(180deg,#ACCF48 0%,#7B9C1D 100%)",
    padding: "10px 20px",
    width: "fit-content",
    borderRadius: "15px",
    boxShadow: "0px 4px 4px #0003",
    color: "#000",
    outline: "none",
  },
  secondary: {
    background: "#6C6C6C",
    padding: "10px 20px",
    width: "fit-content",
    borderRadius: "15px",
    boxShadow: "0px 4px 4px #0003",
    color: "#FFF",
    outline: "none",
  },
  text: {
    padding: "10px 20px",
    width: "fit-content",
    borderRadius: "15px",
    color: "#FFF",
    outline: "none",
  },
};
export default function Button({
  children,
  st = {},
  type = "primary",
}: IButton) {
  //create animations
  const refButton = useRef(null);
  useAnimate(refButton.current, (addEvent) => {
    addEvent({
      selector: ".Button",
      event: "hover",
      type: "to",
      animation: { background: "#0000", color: "#ACCF48", scale: 0.9 },
    });
  });

  //Render
  return (
    <button
      ref={refButton}
      className="Button"
      style={{
        ...StylesButton[type],
        ...st,
      }}
    >
      {children}
    </button>
  );
}
