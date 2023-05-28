import { TypeWidthWindow } from "../@Types/ResponsiveTypes";

export function sizeWindow(size: number): TypeWidthWindow {
  if (size > 2300) return "Large";
  else if (size > 1800) return "Standar+";
  else if (size > 1500) return "Standar";
  else if (size > 1000) return "Tablet";
  else if (size > 730) return "LandScape";
  else return "Movil";
}
