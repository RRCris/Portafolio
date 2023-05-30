import React, { CSSProperties, ReactNode } from "react";

interface IStack {
  direction?: "column" | "row";
  spacing?: number;
  justifyContent?:
    | "center"
    | "space-between"
    | "space-evently"
    | "space-around"
    | "end"
    | "start";
  alignItems?: "center" | "baseline" | "end";
  wrap?: boolean;
  children?: any | undefined;
  st?: CSSProperties;
}
export default function Stack({
  alignItems = "center",
  direction = "row",
  justifyContent = "start",
  spacing,
  wrap,
  children,
  st,
}: IStack) {
  // element to array
  if (children && !children?.map) children = [children];
  //calcular spacing
  const spacingInPX = (spacing || 0) * 10 + "px";
  //direction of Spacing
  const styleNode: CSSProperties =
    direction === "row"
      ? { marginRight: spacingInPX }
      : { marginBottom: spacingInPX };
  return (
    <div
      style={{
        display: "flex",
        justifyContent,
        alignItems,
        flexWrap: wrap ? "wrap" : undefined,
        flexDirection: direction,
        ...st,
      }}
    >
      {children &&
        children.map((n: any, i: any) => (
          <div key={i} style={styleNode}>
            {n}
          </div>
        ))}
    </div>
  );
}
