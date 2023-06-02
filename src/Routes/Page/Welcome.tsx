import React from "react";
import Button from "../../Components/Button";
import NavBar from "../../Components/NavBar";
import PageHead from "../../Components/PageHead";

export default function Welcome() {
  return (
    <PageHead>
      <NavBar />
      <h1>Welcome</h1>
      <Button type="text">hola</Button>
      <Button type="secondary">hola</Button>
      <Button type="primary">hola</Button>
    </PageHead>
  );
}
