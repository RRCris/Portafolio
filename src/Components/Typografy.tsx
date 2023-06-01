import React, { CSSProperties, ReactNode } from "react";

type TypesTypografy = "title" | "subtitle" | "bodyTitle" | "body" | "bodySmall";

interface ITypografy {
  type?: TypesTypografy;
  st?: CSSProperties;
  children?: ReactNode;
}

const StyleTypes = {
  title: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "96px",
    lineHeight: "115px",
  },
  subtitle: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "32px",
    lineHeight: "38px",
  },
  bodyTitle: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "24px",
  },
  body: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "24px",
  },
  bodySmall: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "24px",
  },
};
export default function Typografy({
  type = "bodyTitle",
  st,
  children,
}: ITypografy) {
  return <div style={{ ...StyleTypes[type], ...st }}>{children}</div>;
}
