import React from "react";
import { useMapper } from "../context/MapperContext";

function SwitcherButton() {
  const { ClickHandler } = useMapper();

  return (
    <div>
      <button
        onClick={() => ClickHandler(1)}
        className="mx-5 bg-slate-500 rounded-lg px-3 py-3"
      >
        Unidad
      </button>
      <button
        onClick={() => ClickHandler(2)}
        className="mx-5 bg-slate-500 rounded-lg px-3 py-3"
      >
        Carga
      </button>
      <button
        onClick={() => ClickHandler(3)}
        className="mx-5 bg-slate-500 rounded-lg px-3 py-3"
      >
        Distancia
      </button>

    </div>
  );
}

export default SwitcherButton;
