import React, { CSSProperties } from "react";
import useSizeWindow from "../Hooks/UeeSizeWindow";

//Styles
const StyleRootNavBar: CSSProperties = {
  width: "100vw",
  height: "56px",
  background: "#D9D9D9",
};
export default function NavBar() {
  const { width, height, responsive } = useSizeWindow();
  console.log(responsive);
  return <div style={StyleRootNavBar}>NavBar</div>;
}
