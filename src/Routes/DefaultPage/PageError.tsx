import React from "react";
import NavBar from "../../Components/NavBar";
import PageHead from "../../Components/PageHead";
import Typografy from "../../Components/Typografy";

export default function PageError() {
  return (
    <PageHead title="DevWeb | Error" describe="el sitio web ha tenido un error">
      <NavBar />
      <Typografy>Ha ocurrido un error</Typografy>
    </PageHead>
  );
}
