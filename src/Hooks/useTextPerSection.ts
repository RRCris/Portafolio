import { useLanguaje } from "./useLanguaje";
import AllText from "../Languaje/index.json";
import { useLocation } from "react-router-dom";

export type TypeSegments = "head" | "navbar" | "welcome";
export type TypePageSegment =
  | "404"
  | "buildPage"
  | "capcities"
  | "errorPage"
  | "experience"
  | "habilities"
  | "welcome";
export function useTextPerSection(segment: TypeSegments) {
  const languaje = useLanguaje();
  const segmentLocal = useLocation().pathname.replace(
    "/",
    ""
  ) as TypePageSegment;
  const text = AllText[languaje].segments[segment];

  //envia solo los headers de la pagina en donde esta
  if (segment === "head") return text[segmentLocal];

  return text;
}
