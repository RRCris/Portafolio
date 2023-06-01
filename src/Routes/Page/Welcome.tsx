import React from "react";
import Button from "../../Components/Button";
import NavBar from "../../Components/NavBar";
import PageHead from "../../Components/PageHead";

export default function Welcome() {
  return (
    <PageHead
      title="DevWeb | Bienvenida"
      describe="pagina de bienvenida de el portafolio web"
    >
      <NavBar />
      <h1>Welcome</h1>
      <Button type="text">hola</Button>
      <Button type="secondary">hola</Button>
      <Button type="primary">hola</Button>
    </PageHead>
  );
}
