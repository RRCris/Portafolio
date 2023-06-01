import React from "react";
import Button from "../../Components/Button";
import NavBar from "../../Components/NavBar";
import PageHead from "../../Components/PageHead";

export default function NotFound() {
  return (
    <PageHead
      title="DevWeb | NotFound"
      describe="la ruta que buscaba no existe"
    >
      <NavBar />
      NotFound
    </PageHead>
  );
}
