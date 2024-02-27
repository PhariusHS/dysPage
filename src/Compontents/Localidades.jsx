import React from "react";
import { useMapper } from "../context/MapperContext";


function Localidades() {

    const {setPartida, setDestino} = useMapper();

  return (
    <div className="flex flex-col">
      <label>Punto de partida: </label>
      <input type="text" placeholder=" Cordoba" onChange={(e) => setPartida(e.target.value) } className="border border-black"/>
      <label>Lugar de destino: </label>
      <input type="text" placeholder=" Chascomus" onChange={(e) => setDestino(e.target.value)} className="border border-black"/>
    </div>
  );
}

export default Localidades;
