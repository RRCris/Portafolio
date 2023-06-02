import React, { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { useTextPerSection } from "../Hooks/useTextPerSection";

export default function PageHead(props: { children: ReactNode }) {
  const data = useTextPerSection("head");
  return (
    <div>
      <Helmet>
        <title>{"WebCris |" + data.title}</title>
      </Helmet>
      {props.children}
    </div>
  );
}
