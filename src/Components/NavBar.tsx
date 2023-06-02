import gsap from "gsap";
import React, {
  CSSProperties,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Link, useLocation } from "react-router-dom";
import { TypeWidthWindow } from "../@Types/ResponsiveTypes";
import { useAnimate } from "../Hooks/useAnimate";
import { useLanguaje } from "../Hooks/useLanguaje";
import useSizeWindow from "../Hooks/UseSizeWindow";
import { useTextPerSection } from "../Hooks/useTextPerSection";
import Button from "./Button";

import Stack from "./Stack";
import Typografy from "./Typografy";

//data
const positionBarSelect = ["experience", "habilities", "capacities"];
const heightNavBar = "56px";
const toSizeNavbar = {
  Large: 1400,
  "Standar+": 1200,
  Standar: 1000,
  Tablet: 900,
  LandScape: 550,
  Movil: 400,
};
const positionTabButton = {
  experience: 0,
  habilities: 1,
  capacities: 2,
};
//Styles
const StyleRootNavBar: CSSProperties = {
  width: "100vw",
  height: heightNavBar,
  background: "#D9D9D9",
};
//@types
type TypeSelectButton = "experience" | "habilities" | "capacities";

//Component
export default function NavBar() {
  const { pathname } = useLocation();
  const x =
    positionBarSelect.find((pos) => pathname.includes(pos)) || "experience";

  console.log(x);
  const { responsive } = useSizeWindow();
  const [selectButton, setSelectButton] = useState<TypeSelectButton>(
    x as TypeSelectButton
  );
  const refContainer = useRef<HTMLDivElement>(null);

  useAnimate(refContainer.current, () => {
    const tl = gsap.timeline();
    tl.from(".NavBar", {
      duration: 0.6,
      x: -1000,
    })
      .from(".ButtonNav", { y: -30, opacity: 0, stagger: 0.2 })
      .from(".BarSelect", { y: 56, opacity: 0 }, "-=0.3");
  });

  return (
    <div className="NavBar" ref={refContainer}>
      <Stack st={StyleRootNavBar} justifyContent="center" spacing={2}>
        <div
          style={{
            width: toSizeNavbar[responsive],
            height: heightNavBar,
            position: "relative",
          }}
        >
          <BarSelect
            width={toSizeNavbar[responsive] / 3}
            position={positionTabButton[selectButton]}
          />
          <Stack
            justifyContent="space-around"
            st={{ height: heightNavBar, position: "relative", zIndex: "10" }}
          >
            <ButtonNav
              to="/services/experience"
              title="Mis Experiencias"
              select={selectButton === "experience"}
              onClick={() => setSelectButton("experience")}
              responsive={responsive}
            />
            <ButtonNav
              to="/services/habilities"
              title="Mis Habilidades"
              select={selectButton === "habilities"}
              onClick={() => setSelectButton("habilities")}
              responsive={responsive}
            />
            <ButtonNav
              to="/services/capacities"
              title="Mis Capacidades"
              select={selectButton === "capacities"}
              onClick={() => setSelectButton("capacities")}
              responsive={responsive}
            />
          </Stack>
        </div>
      </Stack>
    </div>
  );
}

function ButtonNav(props: {
  to: string;
  title: string;
  select: boolean;
  onClick(): void;
  responsive: TypeWidthWindow;
}) {
  return (
    <Link
      to={props.to}
      className="ButtonNav"
      onClick={props.onClick}
      style={{ height: heightNavBar }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        st={{ height: heightNavBar, textAlign: "center" }}
      >
        <Button type="text">
          <Typografy
            type={props.responsive === "Movil" ? "bodySmall" : "bodyTitle"}
          >
            {props.title}
          </Typografy>
        </Button>
      </Stack>
    </Link>
  );
}

function BarSelect(props: { width: number; position: number }) {
  const refRoot = useRef(null);
  const ctx = useAnimate();

  useLayoutEffect(() => {
    ctx.add(() => {
      gsap.to(refRoot.current, {
        x: props.width * props.position,
        width: props.width || 300,
        duration: 0.3,
      });
    });
  }, [props.position, props.width]);

  return (
    <div
      className="BarSelect"
      ref={refRoot}
      style={{
        position: "absolute",
        top: 0,
        height: "inherit",
        background: "#353535",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
      }}
    />
  );
}
