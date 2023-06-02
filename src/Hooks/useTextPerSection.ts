import { useLanguaje } from "./useLanguaje";
import AllText from "../Languaje/index.json";
import { useLocation } from "react-router-dom";

export type TypeSegments = "head" | "navbar" | "welcome";
export type TypePageSegment =
  | "404"
  | "buildPage"
  | "capacities"
  | "errorPage"
  | "experience"
  | "habilities"
  | "welcome";
export function useTextPerSection(
  segment: TypeSegments,
  page?: TypePageSegment
) {
  const languaje = useLanguaje();
  const text: any = AllText[languaje].segments[segment];

  //envia solo los headers de la pagina en donde esta
  if (segment === "head") return text[page || "welcome"];

  return text;
}
