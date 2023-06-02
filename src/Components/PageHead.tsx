import React, { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { TypePageSegment, useTextPerSection } from "../Hooks/useTextPerSection";

export default function PageHead(props: {
  children: ReactNode;
  page?: TypePageSegment;
}) {
  const data = useTextPerSection("head", props.page);
  return (
    <div>
      <Helmet>
        <title>{"WebCris | " + data.title}</title>
      </Helmet>
      {props.children}
    </div>
  );
}
