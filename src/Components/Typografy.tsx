import React, { CSSProperties, ReactNode } from "react";

type TypesTypografy = "title" | "subtitle" | "bodyTitle" | "body";

interface ITypografy {
  type?: TypesTypografy;
  st?: CSSProperties;
  children?: ReactNode;
}
export default function Typografy({
  type = "bodyTitle",
  st,
  children,
}: ITypografy) {
  let TypografyStyle: CSSProperties = {};

  switch (type) {
    case "title":
      TypografyStyle = {
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "96px",
        lineHeight: "115px",
      };
      break;
    case "subtitle":
      TypografyStyle = {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "32px",
        lineHeight: "38px",
      };
      break;
    case "bodyTitle":
      TypografyStyle = {
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "20px",
        lineHeight: "24px",
      };
      break;
    case "body":
      TypografyStyle = {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "20px",
        lineHeight: "24px",
      };
      break;
  }
  return <div style={{ ...TypografyStyle, ...st }}>{children}</div>;
}
