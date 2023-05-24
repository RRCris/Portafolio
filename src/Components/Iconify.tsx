import React, { CSSProperties } from "react";
import { Icon } from "@iconify-icon/react";

interface Iiconify {
  st?: CSSProperties;
  icon: string;
  color?: string;
  size?: number;
}
export default function Iconify({
  st = {},
  icon,
  color = "inherit",
  size = 20,
}: Iiconify) {
  return (
    <div style={{ width: "fit-content", ...st }}>
      <Icon icon={icon} width={size} height={size} color={color} />
    </div>
  );
}
