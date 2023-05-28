import React from "react";
import NavBar from "../../Components/NavBar";
import PageHead from "../../Components/PageHead";

export default function Welcome() {
  return (
    <PageHead
      title="Welcome | Developer Web"
      describe="pagina de bienvenida de el portafolio web"
    >
      <NavBar />
      <h1>Welcome</h1>
    </PageHead>
  );
}
