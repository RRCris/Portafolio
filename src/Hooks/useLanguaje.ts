import { LanguajeKeys } from "./../@Types/Languaje.d";
import { useEffect } from "react";
import { useState } from "react";

function languajeKey(rawLanguaje: string): LanguajeKeys {
  switch (rawLanguaje) {
    case "es_ES":
      return "es";
    case "es":
      return "es";
    case "en":
      return "en";
    case "en-US":
      return "en";
    default:
      return "en";
  }
}

export function useLanguaje() {
  const [languaje, setLanguaje] = useState<LanguajeKeys>(
    languajeKey(window.navigator.language)
  );

  function handleChangeLanguaje() {
    setLanguaje(languajeKey(window.navigator.language));
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
