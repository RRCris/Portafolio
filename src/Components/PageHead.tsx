import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";

export default function PageHead(props: {
  title: string;
  describe: string;
  children: ReactNode;
}) {
  return (
    <div>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      {props.children}
    </div>
  );
}
