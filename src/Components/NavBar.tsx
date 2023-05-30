import React, {
  CSSProperties,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import useSizeWindow from "../Hooks/UeeSizeWindow";
import { useAnimate } from "../Hooks/useAnimate";
import Button from "./Button";
import Stack from "./Stack";
import Typografy from "./Typografy";

//data
const toSizeNavbar = {
  Large: 1200,
  "Standar+": 1000,
  Standar: 850,
  Tablet: 700,
  LandScape: 500,
  Movil: 300,
};
//Styles
const StyleRootNavBar: CSSProperties = {
  width: "100vw",
  height: "56px",
  background: "#D9D9D9",
};
//@types
type TypeSelectButton = "experience" | "habilities" | "capacities";

//Component
export default function NavBar() {
  const { responsive } = useSizeWindow();
  const [selectButton, setSelectButton] =
    useState<TypeSelectButton>("experience");
  console.log(responsive);
  return (
    <Stack st={StyleRootNavBar} justifyContent="center" spacing={2}>
      <div style={{ width: toSizeNavbar[responsive] }}>
        <Stack justifyContent="space-between">
          <ButtonNav
            title="Mis Experiencias"
            select={selectButton === "experience"}
            onClick={() => setSelectButton("habilities")}
          />
          <ButtonNav
            title="Mis Habilidades"
            select={selectButton === "habilities"}
            onClick={() => setSelectButton("habilities")}
          />
          <ButtonNav
            title="Mis Capacidades"
            select={selectButton === "capacities"}
            onClick={() => setSelectButton("capacities")}
          />
        </Stack>
      </div>
    </Stack>
  );
}

function ButtonNav(props: { title: string; select: boolean; onClick(): void }) {
  //color de seleccion
  const color = props.select ? "#ACCF48" : "#FFF";
  //animacion  del hover
  const { refAnimate } = useAnimate("hover", { color }, { color: "#ACCF48" });
  //en el primer render se da el color ya despues lo controla useAnimate
  useLayoutEffect(() => {
    if (refAnimate.current) {
      refAnimate.current.style.color = color;
    }
  }, []);
  return (
    <div ref={refAnimate} onClick={props.onClick}>
      <Typografy>{props.title}</Typografy>
    </div>
  );
}
