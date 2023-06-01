import { useEffect } from "react";
import { useState } from "react";
export function useLanguaje() {
  const [languaje, setLanguaje] = useState(window.navigator.language);

  function handleChangeLanguaje() {
    setLanguaje(window.navigator.language);
  }

  //add listener for change languaje
  useEffect(() => {
    window.addEventListener("languagechange", handleChangeLanguaje);

    //clean listener because not need
    return () =>
      window.removeEventListener("languagechange", handleChangeLanguaje);
  }, []);

  //
  return languaje;
}
